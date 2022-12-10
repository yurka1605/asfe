import { Component, Input } from '@angular/core';

@Component({
  selector: 'asfe-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string;
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() secondary: boolean = false;
}
