import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'cye-chat-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent {

  @Input() currentUser: User;
  public currentChat: User;

  constructor() { }

}
