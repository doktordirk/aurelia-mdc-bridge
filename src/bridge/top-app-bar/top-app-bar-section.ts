import { bindable, containerless } from 'aurelia-framework';
import * as util from '../util';

@containerless()
export class MdcTopAppBarSection {
  @bindable() public class: string;
  @bindable() public start = false;
  @bindable() public end = false;
  @bindable() public fit = false;
  private elementSection: HTMLElement;

  private bind() { /** */ }
  private unbind() {/** */ }

  private attached() {
    this.startChanged(this.start);
    this.endChanged(this.end);
    this.fitChanged(this.fit);
  }

  private startChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementSection.classList[value ? 'add' : 'remove']('mdc-top-app-bar__section--align-start');
  }

  private endChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementSection.classList[value ? 'add' : 'remove']('mdc-top-app-bar__section--align-end');
  }

  private fitChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementSection.classList[value ? 'add' : 'remove']('mdc-top-app-bar__section--shrink-to-fit');
  }
}
