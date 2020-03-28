import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Plugin2Component } from './plugin2.component';
import { SharedModule } from 'shared';
import { ApplicationCoreModule } from 'src/app/application-core/application-core.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, SharedModule, ApplicationCoreModule, HttpClientModule],
  declarations: [Plugin2Component],
  entryComponents: [Plugin2Component]
})
export class Plugin2Module {
  static entry = Plugin2Component;
}
