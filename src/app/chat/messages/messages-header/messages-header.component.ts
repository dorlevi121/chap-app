import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cye-chat-messages-header',
  templateUrl: './messages-header.component.html',
  styleUrls: ['./messages-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesHeaderComponent {

  @Input() firstName: string;
  @Input() lastName: string;
}
