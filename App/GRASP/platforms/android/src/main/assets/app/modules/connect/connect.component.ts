import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'connect',
  templateUrl: 'modules/connect/connect.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ConnectComponent {
  text: string = 'Connect to bluetooth';
}
