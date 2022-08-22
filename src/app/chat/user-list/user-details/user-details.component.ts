import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'cye-chat-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {

  @Input() user: User;
  @Input() isCurrentChat: boolean;
  @Output() currentChat = new EventEmitter<void>();

}
