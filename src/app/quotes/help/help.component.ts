import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

declare var $: any;

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  // modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openSupportModal(modalTemplate: TemplateRef<Element>): void {
    // this.modalRef = this.modalService.show(modalTemplate);
    $('#supportModal').modal('show');
  }

  closeModal(): void {
    $('#supportModal').modal('hide');
  }
}
