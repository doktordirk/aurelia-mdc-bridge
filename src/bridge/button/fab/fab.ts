import { bindable, bindingMode, customAttribute, inject } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCRipple } from '@material/ripple';
import * as util from '../../util';
import { DOMHelper } from '../../dom-helper';

@customAttribute('mdc-fab')
@inject(Element)
export class MdcFab {
  @bindable() public mini = false;
  @bindable() public exited = false;
  @bindable() public extended = false;
  @bindable() public label = '';
  @bindable() public ariaLabel = '';
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public ripple = true;
  private log: Logger;
  private icon = null;

  constructor(private element: Element) {
    this.log = getLogger('mdc-fab');

    // icon is the element child
    this.icon = this.element.firstChild;
    this.removeChildren();
  }

  private attached() {
    this.element.classList.add('mdc-fab');

    // add icon node
    if(!this.extended) {
      const iconNode = DOMHelper.createElement('span');
      iconNode.classList.add('mdc-fab__icon', 'material-icons');
      if (this.icon) { iconNode.appendChild(this.icon); }
      this.element.appendChild(iconNode);
    } else {
      if (this.icon) { 
        const iconNode = DOMHelper.createElement('span');
        iconNode.classList.add('mdc-fab__icon', 'material-icons');
        if (this.icon) { iconNode.appendChild(this.icon); }
        this.element.appendChild(iconNode);
      }

      // append label node
      const labelNode = DOMHelper.createElement('span');
      labelNode.classList.add('mdc-fab__label');
      if (this.label) { labelNode.innerText = this.label; }
      this.element.appendChild(labelNode);
    }

    this.miniChanged(this.mini);
    this.exitedChanged(this.exited);
    this.extendedChanged(this.extended);
    this.ariaLabelChanged(this.ariaLabel);

    // add ripple effect
    if (util.getBoolean(this.ripple)) {
      MDCRipple.attachTo(this.element);
    }
  }

  private detached() {
    const classes = [
      'mdc-fab',
      'material-icons',
      'mdc-fab--mini',
      'mdc-fab--exited',
      'mdc-fab--extended'
    ];
    this.element.classList.remove(...classes);
    this.element.removeAttribute('aria-label');
    this.removeChildren();
  }

  private miniChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-fab--mini');
  }

  private exitedChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-fab--exited');
  }

  private extendedChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-fab--extended');
  }

  private ariaLabelChanged(newValue) {
    this.element.setAttribute('aria-label', newValue);
  }

  private removeChildren() {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }
  }

}
