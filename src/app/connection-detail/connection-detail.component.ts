import {Connection} from '../models/connection';
import {Component, OnInit, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-connection-detail',
  templateUrl: './connection-detail.component.html',
  styleUrls: ['./connection-detail.component.css']
})
export class ConnectionDetailComponent implements OnInit {

  editing = false;

  @Input()
  connection: Connection;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  editModal() {
    this.modalService.open(ConnectionDetailComponent);
    this.editing = true;
  }

}
