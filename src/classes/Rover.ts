class Rover {
  location?: any;
  grid?: any;
  obstacles?: any;
  status: string;
  orientation?: string;
  directionMap: string[];
  altDirectionMap: any;

  constructor({
    location = [0, 0],
    orientation = "N",
    grid = [10, 10],
    obstacles = [],
  }) {
    this.location = location;
    this.orientation = orientation;
    this.grid = grid;
    this.obstacles = obstacles;
    this.status = "OK";
    this.directionMap = ["N", "E", "S", "W"];
  }

  turn(direction: string) {
    const indexOfCurrentOrientation = this.directionMap.indexOf(
      this.orientation as string
    );

    if (direction === "L") {
      const nextOrientation =
        indexOfCurrentOrientation > 0
          ? this.directionMap[indexOfCurrentOrientation - 1]
          : this.directionMap[3];

      return (this.orientation = nextOrientation);
    } else if (direction === "R") {
      const nextOrientation =
        indexOfCurrentOrientation < 3
          ? this.directionMap[indexOfCurrentOrientation + 1]
          : this.directionMap[0];

      return (this.orientation = nextOrientation);
    }
  }

  advanceForward() {
    let x = this.location[0];
    let y = this.location[1];

    // fix ts error
    const xBoundary = this?.grid[0];
    const yBoundary = this?.grid[1];

    switch (this.orientation) {
      case "N":
        x < xBoundary && x++;
        break;
      case "S":
        x > 0 && x--;
        break;
      case "E":
        y < yBoundary && y++;
        break;
      case "W":
        y > 0 && y--;
        break;
      default:
        break;
    }

    return (this.location = [x, y]);
  }

  getStatus() {
    return this.status;
  }

  move(commands: string) {
    const commandSteps = commands.split("");

    commandSteps.forEach((step) => {
      if (step === "R") {
        return this.turn("R");
      } else if (step === "L") {
        return this.turn("L");
      } else if (step === "M") {
        return this.advanceForward();
      }
    });

    return `[${this.location}] ${this.orientation}`;
  }
}

export default Rover;
