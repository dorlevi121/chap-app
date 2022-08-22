import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { ChatComponent } from './chat/chat.component';
import { UserListHeaderComponent } from './chat/user-list/user-list-header/user-list-header.component';
import { SearchUserComponent } from './chat/user-list/search-user/search-user.component';
import { MessagesComponent } from './chat/messages/messages.component';
import { MessagesHeaderComponent } from './chat/messages/messages-header/messages-header.component';
import { MessageComponent } from './chat/messages/message/message.component';
import { WriteMessageComponent } from './chat/messages/write-message/write-message.component';
import { StoreModule } from '@ngrx/store';
import { UserListComponent } from './chat/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { reducers } from './store/app.reducer';
import { LogoNamePipe } from './pipes/logo-name.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { UserDetailsComponent } from './chat/user-list/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    ChatComponent,
    UserListHeaderComponent,
    SearchUserComponent,
    MessagesComponent,
    MessagesHeaderComponent,
    MessageComponent,
    WriteMessageComponent,
    UserListComponent,
    LogoNamePipe,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
