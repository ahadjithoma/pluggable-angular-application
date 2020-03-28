import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PlugginStoreService {

  private dataSub = new BehaviorSubject<number>(0);
  public data$ = this.dataSub.asObservable();

  constructor() { }

  public increase() {
    this.dataSub.next(this.dataSub.value + 1);
  }

  public decrease() {
    this.dataSub.next(this.dataSub.value - 1);
  }

}
