import * as core from '@angular/core';
import * as common from '@angular/common';
import * as forms from '@angular/forms';
import * as router from '@angular/router';
import * as rxjs from 'rxjs';
import * as tslib from 'tslib';
import {ApplicationCoreModule as appcore} from 'src/app/application-core/application-core.module';
import * as http from '@angular/common/http';
import * as PlugginStoreService from '../pluggin-store.service';

export const PLUGIN_EXTERNALS_MAP = {
  'ng.core': core,
  'ng.common': common,
  'ng.forms': forms,
  'ng.router': router,
  rxjs,
  tslib,
  'http':http,
  'app.core': appcore,
  'store': PlugginStoreService
};
