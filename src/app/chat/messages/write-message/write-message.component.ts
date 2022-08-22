import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'cye-chat-write-message',
  templateUrl: './write-message.component.html',
  styleUrls: ['./write-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WriteMessageComponent implements OnInit {

  @Output() newMessage = new EventEmitter<string>();

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      message: ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    })
  }

  ngOnInit(): void {
  }

  public sendMessage() {
    if (!this.form.valid)
      return;

    this.newMessage.emit(this.form.controls['message'].value);
    this.form.reset();
  }

}
