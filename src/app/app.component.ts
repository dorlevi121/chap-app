import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { AppState } from './store/app.reducer';

@Component({
  selector: 'cye-chat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public users: User[];
  public activeUsers: number = 0;

  constructor(private store: Store<AppState>) { }


  ngOnInit(): void {
    this.store.select('user').subscribe(state => {
      this.users = state.users;
      this.activeUsers = this.users.filter(user => user.isActive).length;
    });
  }
}
