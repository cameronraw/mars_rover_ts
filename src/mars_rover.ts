export default class MarsRover {

  private orientation: string = 'N';
  private y: number = 0;
  private x: number = 0;

  execute(commandString: string) {
    commandString
        .split("")
        .forEach(
            char => this.executeCommand(char)
        );

    return `${this.x}:${this.y}:${this.orientation}`;
  }

  private executeCommand(char: string) {
    if (char === "M") {
      this.move();
    }

    if (char === "L") {
      this.rotateLeft();
    }

    if (char === "R") {
      this.rotateRight();
    }
  }

  private move() {
    switch (this.orientation) {
      case 'N':
        this.y = ++this.y < 9 ? this.y + 1 : 0;
        break;
      case 'S':
        this.y = this.y > 0 ? this.y - 1 : 9;
        break;
      case 'E':
        this.x = this.x < 9 ? this.x + 1 : 0;
        break;
      case 'W':
        this.x = this.x > 0 ? this.x - 1 : 9;
        break;
    }


  }

  private rotateRight() {
    switch (this.orientation) {
      case 'N':
        this.orientation = 'E';
        break;
      case 'E':
        this.orientation = 'S';
        break;
      case 'S':
        this.orientation = 'W';
        break;
      case 'W':
        this.orientation = 'N';
        break;
      default:
        throw new Error(`Invalid orientation: ${this.orientation}`);
    }
  };

  private rotateLeft() {
    switch (this.orientation) {
      case 'N':
        this.orientation = 'W';
        break;
      case 'W':
        this.orientation = 'S';
        break;
      case 'S':
        this.orientation = 'E';
        break;
      case 'E':
        this.orientation = 'N';
        break;
      default:
        throw new Error(`Invalid orientation: ${this.orientation}`);
    }
  }
}
