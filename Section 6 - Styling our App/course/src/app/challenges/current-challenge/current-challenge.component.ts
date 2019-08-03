import { Component, ViewContainerRef } from '@angular/core';
import { ModalDialogService } from 'nativescript-angular/modal-dialog';

import { DayModalComponent } from '../day-modal/day-modal.component';
import { UiService } from '~/app/shared/ui.service';

@Component({
  selector: 'ns-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: [
    './current-challenge.component.common.css',
    './current-challenge.component.css'
  ],
  moduleId: module.id
})
export class CurrentChallengeComponent {
  constructor(
    private modalDialog: ModalDialogService,
    private vcRef: ViewContainerRef,
    private uiService: UiService
  ) {}

  onChangeStatus() {
    this.modalDialog
      .showModal(DayModalComponent, {
        fullscreen: true,
        viewContainerRef: this.uiService.getRootVCR()
          ? this.uiService.getRootVCR()
          : this.vcRef,
        context: { date: new Date() }
      })
      .then((action: string) => {
        console.log(action);
      });
  }
}
