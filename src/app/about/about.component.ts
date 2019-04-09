import { Component, OnInit } from '@angular/core';
import { LEADERS } from '../shared/leaders';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders = LEADERS;
  constructor() { }

  ngOnInit() {
  }

}
