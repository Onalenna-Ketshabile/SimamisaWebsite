import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NeedsService } from 'src/app/services/needs.service';

@Component({
  selector: 'app-modal-add-need',
  templateUrl: './modal-add-need.component.html',
  styleUrls: ['./modal-add-need.component.css','../../../assets/css/modal.css']
})
export class ModalAddNeedComponent implements OnInit {
 // ratings: number[] = [1, 2, 3];
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
  imageError!: string;
  isImageSaved!: boolean;
  cardImageBase64!: string;
  oldSrc: string = './../../../assets/images/placeholder.png';
  newSrc: string = './../../../assets/images/placeholder.png';
  constructor(private needsService: NeedsService,private router:Router,private location:Location) { }

  ngOnInit(): void {

  }

  addNeed(details: { name: string; duedate: any; description: any; priority: any; numNeeded: any; unitCost: any; }) {
    console.log("Add: " + details.name);
    let needDetails = {
      DueDate: details.duedate,
      DateEstablished: new Date(),
      Title: details.name,
      Description: details.description,
      PriorityRating: details.priority,
      ItemImage: this.cardImageBase64,
      NumberNeeded: details.numNeeded,
      UnitCost: details.unitCost,
      orphanageID: localStorage.getItem("orphID"),
    }
    const body = JSON.stringify(needDetails);
    console.log(body);
  
    this.needsService.postNeed(body).subscribe(data => {
      console.log("Posted");
      console.log(data);
      //Close modal and show the newsfeed
      window.location.reload();
    });
  }

  previwImage = async (fileInput: any) => {
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
       if(olds> 200){
        const resized = await this.reduce_image_file_size(res);
        const news = this.calc_image_size(resized as string)
        console.log('new size => ', news, 'KB')
        this.newSrc = resized as string;
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
