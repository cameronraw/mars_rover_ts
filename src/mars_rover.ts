export default class MarsRover {

  private orientation: string = 'N';
  private y: number = 0;
  private x: number = 0;

  execute(commandString: string) {

    commandString.split("").forEach(char => {
      this._executeCommand(char);
    });

    return this.buildOutput();

  }

  private buildOutput() {
    return `${this.x}:${this.y}:${this.orientation}`;
  }

  private _executeCommand(char: string) {
    if (char === "L") {
      this._rotateLeft();
    }
    ;

    if (char === "R") {
      this._rotateRight();
    }
    ;

    if (char === "M") {
      this._moveForward();
    }
  }

  private _moveForward() {
    switch (this.orientation) {
      case "N":
        this.y = this.y < 9 ? this.y + 1 : 0;
        break;
      case "E":
        this.x = this.x < 9 ? this.x + 1 : 0;
        break;
      case "W":
        this.x = this.x === 0 ? 9 : this.x - 1;
        break;
      case "S":
        this.y = this.y === 0 ? 9 : this.y - 1;
        break;
    }
  }

  private _rotateRight() {
    switch(this.orientation){
      case 'N':
        this.orientation = 'E';
        break;
      case 'W':
        this.orientation = 'N';
        break;
      case 'S':
        this.orientation = 'W';
        break;
      case 'E':
        this.orientation = 'S';
        break;
      default:
        throw new Error(`Invalid orientation: ${this.orientation}`);
    }
  };

  private _rotateLeft() {
    switch(this.orientation){
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
