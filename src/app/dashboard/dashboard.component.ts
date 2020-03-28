import { Component, OnInit, ViewChild, ViewContainerRef, Injector, ComponentFactoryResolver, SkipSelf } from '@angular/core';
import { PluginLoaderService } from '../services/plugin-loader/plugin-loader.service';
import { PlugginStoreService } from '../services/pluggin-store.service';
import { DynamicCompComponent } from '../dynamic-comp/dynamic-comp.component';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [PlugginStoreService]
})
export class DashboardComponent implements OnInit {

  @ViewChild('targetRef', { read: ViewContainerRef, static: true })
  vcRef: ViewContainerRef;

  constructor(
    private injector: Injector,
    private pluginLoader: PluginLoaderService,
    private cfr: ComponentFactoryResolver,
    public store: PlugginStoreService
  ) { }

  ngOnInit() {
    this.loadPlugin('plugin1');
  }

  loadComponent(){
    const componentFactory = this.cfr.resolveComponentFactory<any>(DynamicCompComponent);

    this.vcRef.createComponent(componentFactory, 0, this.injector);
  }

  loadPlugin(pluginName: string) {
    console.log(pluginName)
    this.pluginLoader.load(pluginName).then((moduleType: any) => {
      const entry = moduleType.entry;
      const componentFactory = this.cfr.resolveComponentFactory<any>(entry);

      this.vcRef.createComponent(componentFactory, 0, this.injector);
      // const componentRef = componentFactory.create(this.injector);
      // this.vcRef.insert(componentRef.hostView);
      /** */

      // var cmp = componentFactory.create(this.injector)

      // const injector: Injector = Injector.create({
      //   providers: [
      //     // { provide: 'store', useExisting:PlugginStoreService,  deps:[PlugginStoreService],multi:true }
      //     { provide: PlugginStoreService, useValue: this.store }
      //   ],
      //   parent: this.vcRef.parentInjector
      // })

      // let comp = componentFactory.create(injector);
      // this.vcRef.insert(comp.hostView);

      // var componentRef = this.vcRef.createComponent(componentFactory, undefined, injector);
      // componentRef.instance.store = this.store;

    });
  }

  increase() {
    this.store.increase();
  }
  decrease() {
    this.store.decrease();
  }
}

