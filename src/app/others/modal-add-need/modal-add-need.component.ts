import { Component, OnInit } from '@angular/core';
import { NeedsService } from 'src/app/services/needs.service';

@Component({
  selector: 'app-modal-add-need',
  templateUrl: './modal-add-need.component.html',
  styleUrls: ['./modal-add-need.component.css']
})
export class ModalAddNeedComponent implements OnInit {
  ratings:number[] = [1,2,3];
  imageError!: string;
    isImageSaved!: boolean;
    cardImageBase64!: string;
  constructor(private needsService:NeedsService) { }

  ngOnInit(): void {
  }

  addNeed(details: { name: string; duedate: any; description: any; priority: any; numNeeded: any; unitCost: any; }){
    console.log("Add: "+details.name);
    let needDetails = {
      DueDate : details.duedate,
      DateEstablished:new Date(),
      Title:details.name,
      Description:details.description,
      PriorityRating: details.priority,
      ItemImage :this.cardImageBase64,
      NumberNeeded:details.numNeeded,
      //AmountNeed:"3000",
     // AmountReceived:"0",
      UnitCost:details.unitCost,
      orphanageID:"2",
    }
    const body = JSON.stringify(needDetails);
    this.needsService.postNeed(body).subscribe(data=>{
     console.log( "Posted");
      console.log(data);
       //Close modal and show the newsfeed
    });
  }

  fileChangeEvent(fileInput: any) {
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

        if (!allowed_types.some(el=>(fileInput.target.files[0].type).includes(el))) {
            this.imageError = 'Only Images are allowed ( JPG | PNG )';
            return false;
        }
        const reader = new FileReader();
        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            image.onload = (rs) => {
                const img_height = (rs.currentTarget as HTMLInputElement)['height'];
                const img_width = (rs.currentTarget as HTMLInputElement)['width'];

                console.log(img_height, img_width);


                if (img_height > max_height && img_width > max_width) {
                    this.imageError =
                        'Maximum dimentions allowed ' +
                        max_height +
                        '*' +
                        max_width +
                        'px';
                    return false;
                } else {
                    const imgBase64Path = e.target.result;
                    this.cardImageBase64 = imgBase64Path;
                    this.isImageSaved = true;
                    // this.previewImagePath = imgBase64Path;
                    console.log(this.cardImageBase64);
                    return true;
                }
            };
        };

        reader.readAsDataURL(fileInput.target.files[0]);
       
    }
   
    return true;
}

}
