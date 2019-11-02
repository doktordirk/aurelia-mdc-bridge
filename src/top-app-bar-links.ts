import { bindable, containerless } from 'aurelia-framework';
import * as util from './bridge/util';

@containerless()
export class TopAppBarLinks {
  @bindable() public doc = false;
  @bindable() public comp = false;

  public compChanged(newValue) {
    this.comp = util.getBoolean(newValue);
  }
  public docChanged(newValue) {
    this.doc = util.getBoolean(newValue);
  }
}
