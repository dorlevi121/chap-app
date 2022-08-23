import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { takeUntil, debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'cye-chat-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchUserComponent implements OnInit, OnDestroy {

  @Output() searchTerm = new EventEmitter<string>();
  private destroy$: Subject<void> = new Subject<void>();

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      searchTerm: ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    })
  }

  ngOnInit(): void {
    this.form.controls['searchTerm'].valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(value => {
      this.searchTerm.emit(value);
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
