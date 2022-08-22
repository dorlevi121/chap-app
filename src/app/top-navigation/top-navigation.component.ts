import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'cye-chat-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent {

  @Input() users: User[];
  @Output() login = new EventEmitter<string>();

  public userId: string | null;

  constructor() { }

  public userChanges(event: any): void {
    this.userId = event.target.value;
  }

  public userLogin() {
    if (!this.userId)
      return;

    this.login.emit(this.userId);
    this.userId = null;
  }

}
