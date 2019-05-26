import { DOMHelper } from './../../dom-helper';
import { bindable, bindingMode, customElement, ComponentAttached, ComponentDetached, autoinject } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCIconButtonToggle, MDCIconButtonToggleEventDetail } from '@material/icon-button';
import * as util from '../../util';

@customElement('mdc-icon-button')
@autoinject
export class MdcIconButtonToggle implements ComponentAttached, ComponentDetached {

  @bindable({ defaultBindingMode: bindingMode.oneTime }) public iconOn = 'star';
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public iconOff = 'star_border';
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public ariaLabelOn = 'On label';
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public ariaLabelOff = 'Off label';
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public disabled = false;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public on = false;
  private log: Logger;
  private mdcIconToggle;
  private tabindex = 0;
  private button: HTMLElement;

  constructor(private element: Element) {
    this.log = getLogger('mdc-icon-toggle');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  attached(): void {
    this.mdcIconToggle = new MDCIconButtonToggle(this.button);
    this.mdcIconToggle.on = this.on;
    this.button.addEventListener('MDCIconButtonToggle:change', this.raiseEvent.bind(this));
    this.disabledChanged(this.disabled);
    this.raiseEvent();
  }

  detached(): void {
    this.button.removeEventListener('MDCIconButtonToggle:change', this.raiseEvent.bind(this));
    this.mdcIconToggle.destroy();
  }

  private raiseEvent() {
    this.on = this.mdcIconToggle.on;
    util.fireEvent(this.element, 'on-toggle', this.on);
  }

  private onChanged(on) {
    this.mdcIconToggle.on = util.getBoolean(on);
  }

  private disabledChanged(disabled) {
    if(disabled === true) {
      this.button.setAttribute('disabled', '');
    } else {
      this.button.removeAttribute('disabled');
    }
  }

}
