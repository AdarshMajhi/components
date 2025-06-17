import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() iconPrefix?: string;
  @Input() iconSuffix?: string;
  @Input() disabled: boolean = false;
  @Input() size: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg' = 'md';
  @Input() radius: 'none' | 'rounded' | 'pill' = 'none';
  @Input() textColor?: string;
  @Input() bgColor?: string;
  @Input() hoverColor?: string;
  @Input() activeColor?: string;
  @Input() outline: boolean = false;
  @Input() outlineColor: string = '#1D1B20';
  @Input() shadow: boolean = false;
  @Input() ariaLabel: string = '';
  @Input() confirmation: boolean = false;

  @Output() buttonClick = new EventEmitter<Event>();

  get hasText(): boolean {
    return !!this.text;
  }

  originalBgColor?: string;

  onClick(event: Event) {
    if (this.disabled) return;

    if (this.confirmation) {
      const confirmed = confirm('Are you sure?');
      if (!confirmed) return;
    }

    this.buttonClick.emit(event);
  }

  onHover() {
    if (!this.disabled && this.hoverColor && !this.outline) {
      this.originalBgColor = this.bgColor;
      this.bgColor = this.hoverColor;
    }
  }

  onLeave() {
    if (!this.disabled && this.hoverColor && !this.outline) {
      this.bgColor = this.originalBgColor!;
    }
  }

  onActive() {
    if (!this.disabled && this.activeColor && !this.outline) {
      this.bgColor = this.activeColor;
    }
  }
}
