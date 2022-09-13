import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-qrcode',
  templateUrl: './modal-qrcode.component.html',
  styleUrls: ['./modal-qrcode.component.css']
})
export class ModalQrcodeComponent implements OnInit {
  myAngularQrCode:any
  constructor() { }

  ngOnInit(): void {
    this.myAngularQrCode="Simamisa Mobile App Link"
  }

}
