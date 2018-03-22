import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormService } from '../services/form.service';
import { MatDialog } from '@angular/material';
import { CropComponent } from '../containers/crop-component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  croppedImage: any = 'https://www.shareicon.net/download/2017/02/05/878221_user_512x512.png';
  @ViewChild('arquivo') fileInput: ElementRef;

  constructor(private formService: FormService, public dialog: MatDialog) { }

  ngOnInit() {
    this.formService.croppedImage.subscribe((image: string) => {
      this.croppedImage = image;
    });
  }

  fileChangeEvent(event: any): void {
    if (event.srcElement.value !== '') {
      const dialogRef = this.dialog.open(CropComponent, {
          height: 'auto',
          width: '500px',
          data: {event: event}
      });

      dialogRef.afterClosed().subscribe(() => {
        this.fileInput.nativeElement.value = '';
      });
    }
  }

}
