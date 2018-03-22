import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule,
  MatInputModule, MatMenuModule, MatToolbarModule, MatIconModule
} from '@angular/material';

const MODULES = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatDividerModule,
  MatInputModule,
  MatDialogModule,
  MatMenuModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule { }
