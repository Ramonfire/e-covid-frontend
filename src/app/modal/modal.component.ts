import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() content!:string;

  constructor() { }
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  ngOnInit(): void {
  }

}
