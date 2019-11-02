import { bindable, containerless, customElement } from 'aurelia-framework';

@customElement('mdc-top-app-bar-title')
@containerless()
export class MdcTopAppBarTitle {
  @bindable() public class: string;
}
