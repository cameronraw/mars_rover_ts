export default class MarsRover {

  private orientation: string = 'N';

  execute(commandString: string) {

    commandString.split("").forEach(char => {
      if(char === "L"){
        this.moveLeft();
      };

      if(char === "R"){
        this.moveRight();
      };
    });

    return `0:0:${this.orientation}`;

  }
  
  private moveRight() {
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

  private moveLeft() {
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
