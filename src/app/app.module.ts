import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormModule } from './modules/form/form.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ListModule } from './modules/list/list.module';
import { AppRoutesModule } from './app.routes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    DashboardModule,
    FormModule,
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
