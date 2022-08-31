import { Component, OnInit, Input } from '@angular/core';
import { NeedsService } from 'src/app/services/needs.service';

@Component({
    selector: 'app-modal-make-itemproposal',
    templateUrl: './modal-make-itemproposal.component.html',
    styleUrls: ['./modal-make-itemproposal.component.css']
})
export class ModalMakeItemproposalComponent implements OnInit {

    ratings: number[] = [1, 2, 3];
    imageError!: string;
    isImageSaved!: boolean;
    cardImageBase64!: string;
    currentTab: string = 'C';

    constructor(private needsService: NeedsService,) { }

    ngOnInit(): void {
        this.currentTab ='C';
    }

    dropOffMethod(details: any) {

    }
    pickUp(details: any) {

    }
    updateCurrentTab(option: string) {
        this.currentTab = option;
    }
}
