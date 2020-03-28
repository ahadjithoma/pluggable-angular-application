import { Injectable, PLATFORM_ID, Inject, Optional, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

interface PluginsConfig {
  [key: string]: {
    name: string;
    path: string;
    deps: string[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class PluginConfigProviderService {
  config: PluginsConfig;
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = document.location.origin;

  }

  // @preserveServerState('PLUGIN_CONFIGS')
  loadConfig() {
    return this.http.get<PluginsConfig>(`${this.baseUrl}/assets/plugins-config.json`);
  }
}
