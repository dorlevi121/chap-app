import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private store: Store<{ appState: AppState }>) { }
}
