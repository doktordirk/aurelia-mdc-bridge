import { bindable, containerless } from 'aurelia-framework';

@containerless()
export class MdcTopAppBarRow {
  @bindable() public class: string;
}
