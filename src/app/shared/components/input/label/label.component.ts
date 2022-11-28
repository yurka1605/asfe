import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'asfe-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss', '../base-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
  @Input() label: string;
  @Input() isFloat: boolean = false;
  @Input() required: boolean = false;
}
