import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cye-chat-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent {

  @Input() text: string;
  @Input() timestamp: number;
  @Input() isSender: boolean;

}
