import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as AngularCore from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as IdsEnterpriseNg from 'ids-enterprise-ng';
import { __decorate, __metadata } from 'tslib';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

declare const SystemJS: any;

(window as any).__decorate = __decorate;
(window as any).__metadata = __metadata;

SystemJS.set('@angular/core', SystemJS.newModule(AngularCore));
SystemJS.set('@angular/common', SystemJS.newModule(AngularCommon));
SystemJS.set('ids-enterprise-ng', SystemJS.newModule(IdsEnterpriseNg));
