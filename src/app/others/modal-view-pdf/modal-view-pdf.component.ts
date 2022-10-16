import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';
import WebViewer from '@pdftron/webviewer';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-modal-view-pdf',
  templateUrl: './modal-view-pdf.component.html',
  styleUrls: ['./modal-view-pdf.component.css','../../../assets/css/modal.css']
})
export class ModalViewPdfComponent implements OnInit {
  

  docURL!: SafeUrl;
  @ViewChild('viewer')
  vRef!: ElementRef;
  
  constructor(private dataToModals: DataToModalsService, private sanitizer: DomSanitizer) { }
  


  ngOnInit(): void {
    this.reset();
    console.log("ASDFGHJKLS",this.docURL)
    this.dataToModals.pdfUrlDataSent$.subscribe((data: any) => {
      this.docURL = this.sanitizer.bypassSecurityTrustResourceUrl(data);
    })
  }

   show(){
        return this.docURL != undefined ;
  }
  reset(){
    let x  = 'https://simamisa-images.s3.amazonaws.com/big-loader.gif'
    this.docURL = this.sanitizer.bypassSecurityTrustResourceUrl(x);
  }

}
