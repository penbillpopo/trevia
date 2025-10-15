import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ui-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ui-form.component.html',
  styleUrl: './ui-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiFormComponent {
  @Input({ required: true }) formGroup!: FormGroup;
  @Input() novalidate = true;
  @Input() autocomplete: 'on' | 'off' = 'off';

  @Output() submitted = new EventEmitter<Event>();

  handleSubmit(event: Event): void {
    this.submitted.emit(event);
  }
}
