import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AppState } from '../store/app.reducer';
import { addUserToActiveList } from '../store/user/user.actions';

@Component({
  selector: 'cye-chat-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  public users: Observable<{ users: User[] }>;
  public userId: string | null;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.users = this.store.select('user');
  }

  public userChanges(event: any): void {
    this.userId = event.target.value;
  }

  public login() {
    if (!this.userId)
      return;

    this.store.dispatch(addUserToActiveList({ userId: this.userId }));
    this.userId = null;
  }

}
