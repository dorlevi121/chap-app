import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../models/meesage';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private messageListener: { [room: string]: Subject<Message> } = {}
  private historyMessages: { [room: string]: Message[] } = {}

  constructor(private lsService: LocalStorageService) {
    this.historyMessages = JSON.parse(lsService.get('messages') || '{}');
  }

  public getMessageListener(from: string, to: string): Subject<Message> {
    const room = this.generateRoomId(from, to);
    if (!this.messageListener[room])
      this.messageListener[room] = new Subject<Message>();

    return this.messageListener[room];
  }

  public removeMessageListener(userId: string) {
    delete this.messageListener[userId];
  }

  public getHistoryMessages(from: string, to: string): Message[] {
    const room = this.generateRoomId(from, to)

    if (!this.historyMessages[room]) {
      this.historyMessages[room] = []
    }

    return this.historyMessages[room];
  }

  public sendMessage(message: Message, from: string, to: string) {
    const room = this.generateRoomId(from, to)
    this.historyMessages[room].push(message);
    this.messageListener[room].next(message);
    this.saveToLocalStorage();
  }

  public generateRoomId(id1: string, id2: string) {
    if (id1 < id2) {
      return id2 + "|" + id1;
    }
    return id1 + "|" + id2;
  }

  private saveToLocalStorage() {
    this.lsService.set('messages', JSON.stringify(this.historyMessages));
  }
}
