import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ImageCropperModule } from 'ngx-image-cropper';

import { FormService } from './services/form.service';

import { FormComponent } from './components/form.component';
import { CropComponent } from './containers/crop-component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ImageCropperModule
  ],
  declarations: [
    FormComponent,
    CropComponent
  ],
  entryComponents: [
    CropComponent
  ],
  providers: [FormService]
})
export class FormModule { }
