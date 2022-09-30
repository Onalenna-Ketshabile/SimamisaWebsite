import { Pipe, PipeTransform, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DataToModalsService } from 'src/app/services/data-to-modals.service';
import WebViewer from '@pdftron/webviewer';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-modal-view-pdf',
  templateUrl: './modal-view-pdf.component.html',
  styleUrls: ['./modal-view-pdf.component.css']
})
export class ModalViewPdfComponent implements OnInit, PipeTransform {
  @Pipe({ name: 'safe' })

  docURL: string = "https://mag.wcoomd.org/uploads/2018/05/blank.pdf";
  @ViewChild('viewer')
  vRef!: ElementRef;

  constructor(private dataToModals: DataToModalsService, private sanitizer: DomSanitizer) { }
  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.docURL);
  }


  ngOnInit(): void {
    this.dataToModals.pdfUrlDataSent$.subscribe((data: any) => {
      this.docURL = data;
    })
  }

}
