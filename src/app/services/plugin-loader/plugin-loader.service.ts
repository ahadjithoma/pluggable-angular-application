import { Injectable, Type } from '@angular/core';
import { PluginConfigProviderService } from '../plugin-config-provider.service';
import { PLUGIN_EXTERNALS_MAP } from './plugin-externals';

const SystemJs = (window as any).System;


@Injectable({
  providedIn: 'root'
})
export class PluginLoaderService {

  constructor(private configProvider: PluginConfigProviderService) {
    this.provideExternals();
  }

  provideExternals() {
    Object.keys(PLUGIN_EXTERNALS_MAP).forEach(externalKey =>
      (window as any).define(
        externalKey,
        [],
        () => PLUGIN_EXTERNALS_MAP[externalKey]
      )
    );
  }

  load(pluginName): Promise<Type<unknown>> {
    const { config } = this.configProvider;
    if (!config[pluginName]) {
      throw Error(`Can't find appropriate plugin`);
    }

    const depsPromises = (config[pluginName].deps || []).map(dep => {
      return SystemJs.import(config[dep].path).then(m => {
        window['define'](dep, [], () => m.default);
      });
    });

    return Promise.all(depsPromises).then(() => {
      return SystemJs.import(config[pluginName].path).then(
        module => module.default.default
      );
    });
  }
}
