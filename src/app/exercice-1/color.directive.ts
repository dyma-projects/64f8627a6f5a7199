import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @Input('appColor') public colors: {
    top: string;
    bottom: string;
    left: string;
    right: string;
  };

  @HostBinding('style.color') private color: string;

  @HostListener('window:keyup', ['$event']) private windowKeyup(
    $event: KeyboardEvent
  ): void {
    switch ($event.key) {
      case 'ArrowUp':
        this.color = this.colors.top;
        break;
      case 'ArrowDown':
        this.color = this.colors.bottom;
        break;
      case 'ArrowLeft':
        this.color = this.colors.left;
        break;
      case 'ArrowRight':
        this.color = this.colors.right;
        break;
    }
  }
}
