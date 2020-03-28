import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Plugin3Component } from './plugin3.component';
import { SharedModule } from 'shared';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [Plugin3Component],
})
export class Plugin3Module {
  static entry = Plugin3Component;
}
