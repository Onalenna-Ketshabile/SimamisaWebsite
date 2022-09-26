import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AwsimagesService } from 'src/app/services/awsimages.service';
import { ChildrenService } from 'src/app/services/children.service';
import { NeedsService } from 'src/app/services/needs.service';

@Component({
  selector: 'app-modal-add-child-update',
  templateUrl: './modal-add-child-update.component.html',
  styleUrls: ['./modal-add-child-update.component.css','../../../assets/css/modal.css']
})
export class ModalAddChildUpdateComponent implements OnInit {
  spID: any;
  @Output()
  elementAdded: EventEmitter<any> = new EventEmitter();
  imageError!: string;
  isImageSaved: boolean = false;
  cardImageBase64!: string;
  oldSrc: string = './../../../assets/images/placeholder.png';
  newSrc: string = './../../../assets/images/placeholder.png';
  imgURL: any ='./../../../assets/images/placeholder.png';
  constructor(private cService: ChildrenService,private router:Router,private awsS3:AwsimagesService) { }

  ngOnInit(): void {
    this.cService.getSponsorShipID(localStorage.getItem("childID")!).subscribe(data => {
      this.spID = data;
       });
  }
  addPost(details: { name: string; duedate: any; description: any; priority: any; numNeeded: any; unitCost: any; }) {
    console.log("Add: " + details.name);
   
    let needDetails = {
      Title: details.name,
      Description: details.description,
      PostImage: this.imgURL,
      sponsorshipID :this.spID,
    }
    const body = JSON.stringify(needDetails);
    console.log(body)
  //Make Post(uPDATE)
    this.cService.createChildUpdate(body).subscribe(data => {
      console.log("Posted");
      console.log(data);
      this.elementAdded.emit();//Notifies parent to reload
    });
  }
  previwImage = async (fileInput: any) => {

    console.log("Image Added")
    this.imageError = "";
    if (fileInput.target.files && fileInput.target.files[0]) {

      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;

      if (fileInput.target.files[0].size > max_size) {
        this.imageError =
          'Maximum size allowed is ' + max_size / 1000 + 'Mb';

        return false;
      }

      if (!allowed_types.some(el => (fileInput.target.files[0].type).includes(el))) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        return false;
      }
      const reader = new FileReader();
      reader.readAsDataURL(fileInput.target.files[0]);
  
      reader.onload = async (e: any) => {
        //  const image = new Image();
        const image = document.createElement("img");
        image.src = e.target.result;
      
        this.cardImageBase64 = e.target.result;
        
     const res = this.cardImageBase64;

      if (res) {
        const olds = this.calc_image_size(res)
        console.log('Old ize => ', olds, 'KB')
        this.oldSrc = res
       if(olds>1){
        const resized = await this.reduce_image_file_size(res);
        const news = this.calc_image_size(resized as string)
        console.log('new size => ', news, 'KB')
        this.newSrc = resized as string;
        this.imgURL = './../../../assets/images/loading.gif';
        this.awsS3.getUploadURL().subscribe(response=>{
        
          const file = fileInput.target.files[0];
          this.awsS3.uploadImage(response.URL,file).subscribe((res: any)=>{
            this.imgURL = response.URL.split('?')[0];
           
            this.isImageSaved=true;
          })
        });
        this.cardImageBase64 = this.newSrc;
        
       }
        
      }
    }
    }

    return true;
  }

 
  image_to_base64 = (fileInput: any) => {
   
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.target.files[0]);

    reader.onload = (e: any) => {
      //  const image = new Image();
      const image = document.createElement("img");
      image.src = e.target.result;
    
      this.cardImageBase64 = e.target.result;
      
    }
      return this.cardImageBase64;
  }

  calc_image_size = (image: string) => {
    let y = 1;
    if (image.endsWith('==')) {
      y = 2
    }
    const x_size = (image.length * (3 / 4)) - y
    return Math.round(x_size / 1024)
  }

  reduce_image_file_size = async (base64Str: string, MAX_WIDTH = 450, MAX_HEIGHT = 450) => {
    let resized_base64 = await new Promise((resolve) => {
      let img = new Image()
      img.src = base64Str
      img.onload = () => {
        let canvas = document.createElement('canvas')
        let width = img.width
        let height = img.height

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width
            width = MAX_WIDTH
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height
            height = MAX_HEIGHT
          }
        }
        canvas.width = width
        canvas.height = height
        let ctx = canvas.getContext('2d')
        ctx?.drawImage(img, 0, 0, width, height)
        resolve(canvas.toDataURL()) // this will return base64 image results after resize
      }
    });
    return resized_base64;
  }
}
