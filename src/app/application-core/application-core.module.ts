import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberInputComponent } from './number-input/number-input.component';
import { ButtonComponent } from './button/button.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';

const components = [NumberInputComponent, ButtonComponent, TabsComponent, TabComponent];

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports: components
})
export class ApplicationCoreModule { }
