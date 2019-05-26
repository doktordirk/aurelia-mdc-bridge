import { bindable, bindingMode, customAttribute, ComponentAttached, ComponentDetached, autoinject } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCRipple } from '@material/ripple';
import * as util from '../util';

@customAttribute('mdc-button')
@autoinject
export class MdcButton implements ComponentAttached, ComponentDetached {
  @bindable() public compact = false;
  @bindable() public dense = false;
  @bindable() public raised = false;
  @bindable() public outlined = false;
  @bindable() public unelevated = false;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public ripple = true;
  private log: Logger;

  constructor(private element: Element) {
    this.log = getLogger('mdc-button');
  }

  attached(): void {
    this.element.classList.add('mdc-button');
    this.denseChanged(this.dense);
    this.raisedChanged(this.raised);
    this.outlinedChanged(this.outlined);
    this.unelevatedChanged(this.unelevated);

    // add ripple effect
    if (util.getBoolean(this.ripple)) {
      MDCRipple.attachTo(this.element);
    }
  }

  detached(): void {
    const classes = [
      'mdc-button',
      'mdc-button--dense',
      'mdc-button--raised',
      'mdc-button--compact',
      'mdc-button--outlined',
      'mdc-button--unelevated',
      'mdc-card__action',
      'mdc-card__action--button'
    ];
    this.element.classList.remove(...classes);
  }

  private denseChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-button--dense');
  }

  private raisedChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-button--raised');
  }

  private outlinedChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-button--outlined');
  }

  private unelevatedChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-button--unelevated');
  }
}
