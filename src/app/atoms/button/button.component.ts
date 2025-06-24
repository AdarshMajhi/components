import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export enum ButtonWidth {
  Content = 'content',
  Expand = 'expand',
}

export enum ButtonShape {
  Square = 'square',
  Rounded = 'rounded',
}

export enum NativeButtonType {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}

export enum ButtonSize {
  XSM = 'xsm',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XLG = 'xlg',
}

export enum ButtonType {
  Filled = 'filled',
  Outlined = 'outlined',
  Text = 'text',
  Elevated = 'elevated',
  Tonal = 'tonal',
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input('prefixIcon') _prefixIcon?: string;
  @Input('suffixIcon') _suffixIcon?: string;
  @Input('width') _width: ButtonWidth = ButtonWidth.Content;
  @Input('shape') _shape: ButtonShape = ButtonShape.Square;
  @Input('nativeType') _nativeType: NativeButtonType = NativeButtonType.Button;
  @Input('size') _size: ButtonSize = ButtonSize.MD;
  @Input('type') _type: ButtonType = ButtonType.Filled;
  @Input('disabled') _disabled: boolean = false;

  // Extended input attributes
  @Input('form') _form?: string;
  @Input('href') _href?: string;
  @Input('rel') _rel?: string;
  @Input('target') _target?: string;
  @Input('routerDirection') _routerDirection?: string;
  @Input('routerAnimation') _routerAnimation?: string;

  @Output() buttonClick = new EventEmitter<Event>();

  get isLink(): boolean {
    return !!this._href;
  }

  get buttonClass() {
    return {
      button: true,
      [`width__${this._width}`]: true,
      [`shape__${this._shape}`]: true,
      [`size__${this._size}`]: true,
      [`type__${this._type}`]: true,
    };
  }

  onClick(event: Event) {
    if (this._disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.buttonClick.emit(event);
  }
}
