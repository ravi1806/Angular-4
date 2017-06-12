import {Directive, HostBinding, HostListener} from '@angular/core';
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') toggleValue = false;
  @HostListener('click') toggleOpen() {
    this.toggleValue = !this.toggleValue;
  }

}
