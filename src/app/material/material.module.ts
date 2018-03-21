import { NgModule } from '@angular/core';
import {MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatToolbarModule} from '@angular/material';

const MODULES = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatDividerModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule { }
