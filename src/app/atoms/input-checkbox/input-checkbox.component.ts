import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
})
export class InputCheckboxComponent {
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() checkboxColor: string = '#000';
  @Input() labelColor: string = '#000';
  @Input() radius: 'none' | 'rounded' | 'pill' = 'rounded';
  @Input() error: boolean = false;
  @Input() labelPosition: 'left' | 'right' = 'right';
  @Input() ariaLabel: string = '';
  @Input() gap: string = '8px';

  @Output() change = new EventEmitter<boolean>();

  onInternalChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;
    this.change.emit(this.checked);
  }
}
