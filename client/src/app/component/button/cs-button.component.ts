import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'cs-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './cs-button.component.html',
  styleUrl: './cs-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CsButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'outline' | 'ghost' = 'primary';
  @Input() fullWidth = false;
  @Input() disabled = false;

  get hostClasses(): Record<string, boolean> {
    return {
      'cs-button--primary': this.variant === 'primary',
      'cs-button--outline': this.variant === 'outline',
      'cs-button--ghost': this.variant === 'ghost',
      'cs-button--full': this.fullWidth
    };
  }
}
