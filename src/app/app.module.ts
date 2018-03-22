import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutesModule } from './app.routes.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from './modules/material/material.module';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';

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
    NgbModule.forRoot(),
    DashboardModule,
    FormModule,
    ListModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
