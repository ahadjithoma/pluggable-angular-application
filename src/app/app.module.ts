import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PluginConfigProviderService } from './services/plugin-config-provider.service';
import { ApplicationCoreModule } from './application-core/application-core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ApplicationCoreModule
  ],
  providers: [
    PluginConfigProviderService,
    {
      provide: APP_INITIALIZER,
      useFactory: (provider: PluginConfigProviderService) => () =>
        provider
          .loadConfig()
          .toPromise()
          .then(config => (provider.config = config)),
      multi: true,
      deps: [PluginConfigProviderService]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
