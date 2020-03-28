import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { PlugginStoreService } from '../services/pluggin-store.service';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicCompComponent } from '../dynamic-comp/dynamic-comp.component';



@NgModule({
  declarations: [DashboardComponent, DynamicCompComponent],
  entryComponents: [DynamicCompComponent],
  imports: [
    CommonModule ,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }
    ])
  ],
  providers:[PlugginStoreService]
})
export class DashboardModule { }
