import { MDCIconButtonToggleEventDetail } from "@material/icon-button";


export class IconToggle {
  private on = true;
  private disabled = false;

  private iconValue;

  private onToggle(event: MDCIconButtonToggleEventDetail) {
    this.iconValue = event.isOn;
  }
}
