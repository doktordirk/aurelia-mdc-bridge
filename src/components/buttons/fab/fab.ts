
export class Fab {
  private counter = 0;
  private ariaText = 'Aria text';
  private panelId = 0;
  private exited = false;
  private extended = false;
  private shaped = false;

  private changeAria() {
    this.ariaText = 'Aria text ' + this.counter++;
  }
}
