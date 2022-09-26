import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Need } from 'src/app/models/need';
import { NeedsService } from 'src/app/services/needs.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';
import { AwsimagesService } from 'src/app/services/awsimages.service';
@Component({
  selector: 'app-edit-need',
  templateUrl: './edit-need.component.html',
  styleUrls: ['./edit-need.component.css','../../../../assets/css/modal.css']
})
export class EditNeedComponent implements OnInit {
  @ViewChild('editNeedForm') editNeedForm!: NgForm;
  need!: Need;
  id!: number;
  ratings = [{
    name:"low",
    num:3,
  },{
    name:"medium",
    num:2,
  },
  {
    name:"high",
    num:1,
  }];
  elementDeleted: EventEmitter<any> = new EventEmitter()
  imageError!: string;;
  isImageSaved: boolean = false;
  cardImageBase64!: string;
  oldSrc: string = './../../../assets/images/placeholder.png';
  newSrc: string = './../../../assets/images/placeholder.png';
  imgURL: any;
  constructor(private nService: NeedsService,
     private route: ActivatedRoute,
     private router:Router,
     private location: Location,
     private dataToModals: DataToModalsService,
     private awsS3:AwsimagesService
     ) { }

  ngOnInit(): void {

   // this.id = this.route.snapshot.paramMap.get('id')!;
   this.dataToModals.needDatasent$.subscribe(
    data => {
      this.need = data;
      console.log(this.need);
      console.log("From my best service");
      setTimeout(()=>{
        this.editNeedForm.controls["title"].setValue(this.need.Title);
        this.editNeedForm.controls["duedate"].setValue(this.need.DueDate.slice(0,10));
        this.editNeedForm.controls["numNeeded"].setValue(this.need.NumberNeeded);
        this.editNeedForm.controls["unitCost"].setValue(this.need.UnitCost);
        this.editNeedForm.controls["description"].setValue(this.need.Description);
        this.editNeedForm.controls["priority"].setValue(this.need.PriorityRating);
        this.imgURL = this.need.ItemImage;
      })
    }
  )
   
    // this.nService.getNeedByID(this.id).subscribe((data)=>{
    //   this.need = data;
    //   console.log(this.need);
      
    // }
    
    // )

  }
  editNeed(details: { name: string; duedate: any; title: any; description: any; priority: any; numNeeded: any; unitCost: any; }) {
   //Remember to send try new URL incase it is updates
    console.log("Add: " + details.name);
    console.log(details);
    this.id = this.need.ID;

    let needDetails = {
      id:this.id,
      DueDate: details.duedate,
      Title: details.title,
      Description: details.description,
      PriorityRating: details.priority,
      NumberNeeded: details.numNeeded,
      UnitCost: details.unitCost,
    }
    const body = JSON.stringify(needDetails);
    console.log(body);
  
    this.nService.editNeed(body).subscribe(data => {
      console.log("Edited");
      console.log(data);
      this.router.navigate(['manager/newsfeed']);
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
       if(olds>1){
        const resized = await this.reduce_image_file_size(res);
        const news = this.calc_image_size(resized as string)
        console.log('new size => ', news, 'KB')
        this.newSrc = resized as string;
       
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
  back() {
    this.location.back();
  }
}
