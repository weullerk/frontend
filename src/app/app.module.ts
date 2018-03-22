import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutesModule } from './app.routes.module';

import { MaterialModule } from './modules/material/material.module';
import { NgxMaskModule } from 'ngx-mask';

import { DashboardModule } from './modules/dashboard/dashboard.module';
import { FormModule } from './modules/form/form.module';
import { ListModule } from './modules/list/list.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxMaskModule.forRoot(),
    DashboardModule,
    FormModule,
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
