import { Component, Injector, OnInit, Type } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { PopupComponent } from './popup/popup.component';
import { PopupService } from './services/popup.service';
import { AppState } from './store/app.reducer';
import { addUserToActiveList } from './store/user/user.actions';

@Component({
  selector: 'cye-chat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public users: User[];
  public activeUsers: number = 0;

  public popup: Promise<Type<PopupComponent>> | null;
  public popupInjector: Injector;

  constructor(private store: Store<AppState>, private injector: Injector, private popupService: PopupService) { }


  ngOnInit(): void {
    this.store.select('user').subscribe(state => {
      this.users = state.users;
      this.activeUsers = state.activeUsers;
    });

    this.popupService.popup.subscribe(value => {
      if (value.display) {
        this.loadPopup(value.text);
      }
      else {
        this.popup = null;
      }
    })
  }

  public login(userId: string) {
    this.store.dispatch(addUserToActiveList({ userId }));
  }

  private loadPopup(text: string) {
    if (!this.popup) {
      this.popupInjector = Injector.create({
        providers: [{
          provide: 'popupData',
          useValue: { text }
        }],
        parent: this.injector
      });

      this.popup = import(`./popup/popup.component`)
        .then(({ PopupComponent }) => PopupComponent);
    }
  }
}
