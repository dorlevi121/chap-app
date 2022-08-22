import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cye-chat-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  @Output() searchTerm = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

}
