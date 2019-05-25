import { Injectable } from '@angular/core';
import PNotify from 'pnotify/dist/es/PNotify';
import 'pnotify/dist/es/PNotifyButtons';

@Injectable({
  providedIn: 'root'
})
export class NotifyMessageService {

  constructor() { }

  success(title, text) {
    this.alert({title, text, type: Types.SUCCESS});
  }

  error(title, text) {
    this.alert({title, text, type: Types.ERROR});
  }

  private alert({title, text, type}: { title, text, type: Types}) {
    this.pnotify.alert({
      title,
      text,
      type
    });
  }

  private get pnotify() {
    return PNotify;
  }

}

enum Types {
  SUCCESS = 'success',
  ERROR = 'error'
}
