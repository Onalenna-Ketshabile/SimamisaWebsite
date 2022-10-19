import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-qrcode',
  templateUrl: './modal-qrcode.component.html',
  styleUrls: ['./modal-qrcode.component.css','../../../assets/css/modal.css']
})
export class ModalQrcodeComponent implements OnInit {
  myAngularQrCode = "https://expo.dev/artifacts/ce29cc66-9e18-40d2-b163-6bb5ca67c330";
  show: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.myAngularQrCode="Simamisa Mobile App Link"
    if(localStorage.getItem("userRole")==null &&localStorage.getItem("userName")==null ){
      this.show=false;
    }else{
      this.show=true;
    }

  }

}
