import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Message } from '../models/meesage';
import { User } from '../models/user';
import { AppState } from '../store/app.reducer';

@Component({
  selector: 'cye-chat-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent implements OnInit {

  @Input() currentUser: User;

  public activeUsers: Observable<{ history: { [room: string]: Message[] } }>;
  public currentChat: User;

  constructor(private store: Store<AppState>) { }


  ngOnInit(): void { }

}
