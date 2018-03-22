import {Subject} from 'rxjs/Subject';

export class FormService {
  croppedImage = new Subject<string>();
}
