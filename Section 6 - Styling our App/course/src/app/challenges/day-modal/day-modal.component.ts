import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';

@Component({
  selector: 'ns-day-modal',
  templateUrl: './day-modal.component.html',
  styleUrls: ['./day-modal.component.css']
})
export class DayModalComponent implements OnInit {

  constructor(private modalParams: ModalDialogParams) { }

    loadedDate: Date;

  ngOnInit() {
    this.loadedDate = (this.modalParams.context as {date: Date}).date
  }

  onHandleInput(action: string) {
      this.modalParams.closeCallback(action);
  }

}
