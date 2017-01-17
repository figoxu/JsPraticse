import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <p>
      first Works!
    </p>
  `,
  styles: []
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
