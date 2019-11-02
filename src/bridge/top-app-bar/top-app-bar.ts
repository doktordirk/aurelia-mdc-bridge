import { inject, bindable, bindingMode } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCTopAppBar } from '@material/top-app-bar';
import * as util from '../util';

export interface IMdcTopAppBarFlexibleChangeEvent extends CustomEvent {
  /**
   * The flexibleExpansionRatio property is a number from 0-1 representing the ratio
   * of flexible space that has already been collapsed divided by
   * the total amount of flexible space.
   *
   * @type {number}
   */
  detail: {
    flexibleExpansionRatio: number;
  };
}

@inject(Element)
export class MdcTopAppBar {
  @bindable() public class;
  @bindable() public fixed = false;
  @bindable() public waterfall = false;
  @bindable() public fixedLastrowOnly = false;
  @bindable() public flexible = false;
  @bindable() public flexibleDefault = false;
  private log: Logger;
  private elementTopAppBar: HTMLElement;
  private mdcTopAppBar;

  constructor(private element: Element) {
    this.log = getLogger('mdc-top-app-bar');
  }

  private bind() { /** */ }
  private unbind() {/** */ }

  private attached() {
    this.mdcTopAppBar = new MDCTopAppBar(this.elementTopAppBar);
    this.mdcTopAppBar.listen('MDCTopAppBar:change', this.onChange.bind(this));
    this.mdcTopAppBar.preventDefaultOnClick = true;

    this.fixedChanged(this.fixed);
    this.waterfallChanged(this.waterfall);
    this.fixedLastrowOnlyChanged(this.fixedLastrowOnly);
    this.flexibleChanged(this.flexible);
    this.flexibleDefaultChanged(this.flexibleDefault);
  }

  private detached() {
    this.mdcTopAppBar.unlisten('MDCTopAppBar:change', this.onChange.bind(this));
    this.mdcTopAppBar.destroy();
  }

  private onChange(evt) {
    util.fireEvent(this.element, 'on-change', { flexibleExpansionRatio: evt.detail.flexibleExpansionRatio });
  }

  private fixedChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementTopAppBar.classList[value ? 'add' : 'remove']('mdc-top-app-bar--fixed');
    if (value) {
      const fixedAdjustElement = document.querySelector('.mdc-top-app-bar-fixed-adjust');
      this.mdcTopAppBar.fixedAdjustElement = fixedAdjustElement;
    } else {
      this.mdcTopAppBar.fixedAdjustElement = null;
    }
  }

  private waterfallChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementTopAppBar.classList[value ? 'add' : 'remove']('mdc-top-app-bar--waterfall');
  }

  private fixedLastrowOnlyChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementTopAppBar.classList[value ? 'add' : 'remove']('mdc-top-app-bar--fixed-lastrow-only');
  }

  private flexibleChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementTopAppBar.classList[value ? 'add' : 'remove']('mdc-top-app-bar--flexible');
  }

  private flexibleDefaultChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementTopAppBar.classList[value ? 'add' : 'remove']('mdc-top-app-bar--flexible-default-behavior');
  }
}
