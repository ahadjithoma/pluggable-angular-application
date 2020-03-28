import { Component, Input, Inject } from '@angular/core';
import { PlugginStoreService } from 'src/app/services/pluggin-store.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  // providers:[PlugginStoreService]
})
export class DynamicCompComponent {

// @Input() public store : PlugginStoreService;

  constructor(
    private http: HttpClient,
    public store: PlugginStoreService
    // http 
  ) {
    this.http.get('www.google.com').subscribe(r => {
      console.log(r)
    }, e => console.log(e))  }

  increase() {
    this.store.increase();
  }
  decrease() {
    this.store.decrease();
  }

}
