import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil, Subject } from 'rxjs';
import { User } from 'src/app/models/user';
import { AppState } from 'src/app/store/app.reducer';
import { removeUserFromActiveList } from 'src/app/store/user/user.actions';

@Component({
  selector: 'cye-chat-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit, OnDestroy {

  @Input() currentUser: User;
  @Output() currentChatChange = new EventEmitter<User>();

  destroy$: Subject<void> = new Subject<void>();

  private users: User[];
  public displayUsers: User[];
  public currentChatId: string = '';

  constructor(private store: Store<AppState>, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.store.select('user').pipe(
      takeUntil(this.destroy$))
      .subscribe(state => {
        this.users = state.users;
        this.displayUsers = this.users;
        this.cd.markForCheck();
      })
  }

  public searchUser(searchTerm: string) {
    this.displayUsers = this.users.filter(user => {
      const name = user.firstName.toLowerCase() + ' ' + user.lastName.toLowerCase();
      return name.includes(searchTerm.toLocaleLowerCase());
    });
  }

  public logout() {
    this.store.dispatch(removeUserFromActiveList({ userId: this.currentUser.id }));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
