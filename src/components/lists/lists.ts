import { MdcDialog, IMdcListItemClickEvent } from '../../bridge/index';

export class Lists {
  private dense = true;
  private dialog: MdcDialog;

  // List item
  private itemTwoWay = true;

  private onClick(e: IMdcListItemClickEvent) {
    e.stopPropagation();
    this.dialog.show(true);
  }
}
