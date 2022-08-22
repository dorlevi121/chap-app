import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Message } from 'src/app/models/meesage';
import { User } from 'src/app/models/user';
import { ChatService } from 'src/app/services/chat.service';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'cye-chat-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() currentUser: User;
  @Input() set currentChatChnage(value: User) {
    this.destroy$.next();
    this.currentChat = value;
    this.messages = [...this.chatService.getHistoryMessages(this.currentUser.id, this.currentChat.id)];
    this.messageLisener();
  }

  public messages: Message[] = [];
  public currentChat: User;
  public destroy$: Subject<void> = new Subject<void>();

  @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport;

  constructor(private store: Store<AppState>, private chatService: ChatService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.viewPort.scrollTo({ bottom: 0 });
    }, 0);
  }

  public sendMessage(message: string) {
    const newMessage: Message = {
      timestamp: new Date().getTime(),
      data: message,
      from: this.currentUser.id,
      to: this.currentChat.id,
      isRead: false
    }

    this.chatService.sendMessage(newMessage, this.currentUser.id, this.currentChat.id);
  }

  private messageLisener() {
    this.chatService.getMessageListener(this.currentUser.id, this.currentChat.id)
      .pipe(
        takeUntil(this.destroy$))
      .subscribe(message => {
        this.messages = [...this.messages, message];
        this.cd.markForCheck();
        setTimeout(() => {
          this.viewPort.scrollToIndex(this.messages.length - 1)
        }, 0);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
