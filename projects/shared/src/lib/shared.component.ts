import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared',
  template: `
    <p>
      shared library works!
    </p>
  `,
  styles: []
})
export class SharedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
