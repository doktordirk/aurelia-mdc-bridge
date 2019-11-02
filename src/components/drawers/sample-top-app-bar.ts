import { inject, bindable } from 'aurelia-framework';
import * as util from '../../bridge/util';

@inject(Element)
export class SampleTopAppBar {
  @bindable() public fixed = false;
  @bindable() public waterfall = false;
  @bindable() public showMenu = false;

  constructor(private element: Element) {}

  // called from top-app-bar-title
  private onClick() {
    util.fireEvent(this.element, 'on-menu', {});
  }
}
