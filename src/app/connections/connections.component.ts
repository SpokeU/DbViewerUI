import { CONNECTIONS } from '../mocks/mocks';
import {Connection} from '../models/connection';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {


  connections: Connection[] = CONNECTIONS;

  constructor() {}

  ngOnInit() {
  }

}
