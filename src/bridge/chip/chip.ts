import { MDCChip } from '@material/chips';
import { inject, bindingMode, bindable } from 'aurelia-framework';
import * as util from '../util';
import { DOMHelper } from '../dom-helper';


@inject(Element)
export class MdcChip {

  @bindable public class: string;
  @bindable public icon: string;
  @bindable public iconTrailing: boolean;

  private mdcElement: MDCChip;

  constructor(private chip: Element) {}

  private attached() {
    this.mdcElement = new MDCChip(this.chip);
    let chipElement = this.chip.getElementsByClassName("mdc-chip")[0];
    if(this.class) {
      chipElement.classList.add(...this.class.split(" "));
      this.chip.classList.remove(...this.class.split(" "));
    }
    
    if(this.icon) {
      let i = DOMHelper.createElement("i");
      i.classList.add(...["material-icons", "mdc-chip__icon"]);
      i.innerText = this.icon;

      if(this.iconTrailing) {
        i.classList.add(...["mdc-chip__icon--trailing"]);
        chipElement.appendChild(i);
      } else {
        i.classList.add(...["mdc-chip__icon--leading"]);
        chipElement.insertBefore(i, chipElement.getElementsByClassName("mdc-chip__text")[0]);
      }

    }

  }

  private detached() {
    this.mdcElement.destroy();
  }

}
