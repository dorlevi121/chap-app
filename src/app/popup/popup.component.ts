import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { PopupService } from '../services/popup.service';

@Component({
  selector: 'cye-chat-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements AfterViewInit {

  @ViewChild('snackBar') snackBar: ElementRef;
  @ViewChild('alertBar') alertBar: ElementRef;

  public text: string = '';

  constructor(private popupService: PopupService, @Inject('popupData') data: {text: string}) {
    this.text = data.text;    
  }

  ngAfterViewInit(): void {
    this.snackBar.nativeElement.className = 'show';
    this.move()
  }

  private i = 0;
  public move() {
    if (this.i === 0) {
      let width = 1;
      let interval = setInterval(() => {
        if (width >= 100) {
          clearInterval(interval);
          this.close();
        } else {
          width += 0.5;
          this.alertBar.nativeElement.style.width = width + "%";
        }
      }, 30)
    }
  }

  public close() {
    this.popupService.closePopup();
  }

}
