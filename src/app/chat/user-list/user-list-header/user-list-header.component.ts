import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cye-chat-user-list-header',
  templateUrl: './user-list-header.component.html',
  styleUrls: ['./user-list-header.component.scss']
})
export class UserListHeaderComponent {

  @Input() firstName: string;
  @Input() lastName: string;
  @Output() logout = new EventEmitter<void>();

}
