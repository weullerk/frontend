import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ImageCropperModule } from 'ngx-image-cropper';

import { FormService } from './services/form.service';

import { FormComponent } from './components/form.component';
import { CropComponent } from './containers/crop-component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ImageCropperModule,
    NgxMaskModule
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
