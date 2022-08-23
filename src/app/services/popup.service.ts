import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface PopupData {
  display: boolean;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  public popup: BehaviorSubject<PopupData>;

  constructor() {
    this.popup = new BehaviorSubject<PopupData>({ display: false, text: '' });
  }

  public openPopup(text: string) {
    this.popup.next({ display: true, text });
  }

  public closePopup() {
    this.popup.next({ display: false, text: '' });
  }
}
