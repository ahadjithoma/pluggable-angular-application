import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-plugin-2',
  templateUrl: './plugin2.component.html'
})
export class Plugin2Component {

  constructor(private http: HttpClient) {
    this.http.get('www.google.com').subscribe(r => {
      console.log(r)
    }, e => console.log(e))
  }

}
