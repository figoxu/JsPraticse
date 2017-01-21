import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  @Input() time;

  constructor() { }

  ngOnInit() {
  }

}
