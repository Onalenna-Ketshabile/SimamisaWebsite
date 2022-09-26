import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChildUpdate } from 'src/app/models/childupdate';
import { ChildrenService } from 'src/app/services/children.service';
import { NeedsService } from 'src/app/services/needs.service';
import { Location } from '@angular/common';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';
import { AwsimagesService } from 'src/app/services/awsimages.service';
@Component({
  selector: 'app-edit-childupdate',
  templateUrl: './edit-childupdate.component.html',
  styleUrls: ['./edit-childupdate.component.css','../../../../assets/css/modal.css']
})
export class EditChildupdateComponent implements OnInit {
  @ViewChild('editUpdateForm') editChildUpdateForm!: NgForm;
  spID: any;
  id: any;
  childUpdate!: ChildUpdate
  imageError!: string;
  isImageSaved: boolean = false;
  cardImageBase64!: string;
  oldSrc: string = './../../../assets/images/placeholder.png';
  newSrc: string = './../../../assets/images/placeholder.png';
  imgURL: any;
  constructor(private nService: NeedsService,
    private cService: ChildrenService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private dataToModals: DataToModalsService,
    private awsS3:AwsimagesService) { }
  ngOnInit(): void {
    //this.id = this.route.snapshot.paramMap.get('id')!;
    this.dataToModals.childUpdateDatasent$.subscribe(data=>{
      this.childUpdate = data;
      this.editChildUpdateForm.controls["name"].setValue(this.childUpdate.Title);
      this.editChildUpdateForm.controls["description"].setValue(this.childUpdate.Description);
      this.imgURL = this.childUpdate.PostImage
    });
  //  this.cService.getChildUpdateByID(this.id).subscribe((data)=>{

  //   })

  }
  editChildUpdate(details: { name: string; description: any; }) {
    this.id = this.childUpdate.ID;
    let needDetails = {
      Title: details.name,
      Description: details.description,
      PostImage:this.imgURL,
      id:this.id
    }
    const body = JSON.stringify(needDetails);
    console.log(body);

    this.cService.editChildUpdate(body).subscribe(data => {
      console.log("Edited");
      console.log(data);
      window.location.reload();
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
       if(olds> 1){
        const resized = await this.reduce_image_file_size(res);
        const news = this.calc_image_size(resized as string)
        console.log('new size => ', news, 'KB')
        this.newSrc = resized as string;
       this.imgURL = './../../../assets/images/loading.gif';
       console.log(this.imgURL);
        this.awsS3.getUploadURL().subscribe(response=>{
          console.log("Hy Love",response.URL);
          const file = fileInput.target.files[0];
          this.awsS3.uploadImage(response.URL,file).subscribe((res: any)=>{
            this.imgURL = response.URL.split('?')[0];
            console.log("Soryy Love",this.imgURL);
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
  back() {
    this.location.back();
  }
}
