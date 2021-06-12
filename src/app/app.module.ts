import { CompilerFactory, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { SohoComponentsModule } from 'ids-enterprise-ng';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SohoComponentsModule,
  ],
  providers: [
    {
      provide: CompilerFactory,
      useFactory: JitCompilerFactory,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
