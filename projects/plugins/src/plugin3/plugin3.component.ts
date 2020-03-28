import { Component, Input, Inject } from '@angular/core';
import { PlugginStoreService } from 'src/app/services/pluggin-store.service';

@Component({
  selector: 'app-plugin-3',
  templateUrl: './plugin3.component.html',
})
export class Plugin3Component {

  constructor(
    public store: PlugginStoreService
  ) {

  }

  increase() {
    this.store.increase();
  }
  decrease() {
    this.store.decrease();
  }

}
