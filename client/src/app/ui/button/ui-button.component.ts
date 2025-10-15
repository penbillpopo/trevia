import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'outline' | 'ghost' = 'primary';
  @Input() fullWidth = false;
  @Input() disabled = false;

  get hostClasses(): Record<string, boolean> {
    return {
      'ui-button--primary': this.variant === 'primary',
      'ui-button--outline': this.variant === 'outline',
      'ui-button--ghost': this.variant === 'ghost',
      'ui-button--full': this.fullWidth
    };
  }
}
