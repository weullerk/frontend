import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatInputModule,
  MatToolbarModule
} from '@angular/material';

const MODULES = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatDividerModule,
  MatInputModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule { }
