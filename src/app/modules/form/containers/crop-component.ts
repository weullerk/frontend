import {Component, Inject, OnInit} from '@angular/core';
import { FormService } from '../services/form.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html'
})
export class CropComponent implements OnInit {
  imageChangedEvent: any = '';

  constructor(private formService: FormService,
              public dialogRef: MatDialogRef<CropComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
      this.imageChangedEvent = this.data.event;
  }

  imageCropped(image: string) {
    this.formService.croppedImage.next(image);
  }

  imageLoaded() {}

  loadImageFailed() {}

}
