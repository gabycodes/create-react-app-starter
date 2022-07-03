import Rover from "../Rover";

describe("Rover", () => {
  it("accepts starting coordinates", () => {
    const rover = new Rover({ location: [2, 2] });
    expect(rover.location).toEqual([2, 2]);
  });
  it("use default starting coordinates if none are provided", () => {
    const rover = new Rover({});
    expect(rover.location).toEqual([0, 0]);
  });
  it("accepts a grid", () => {
    const rover = new Rover({ grid: [12, 12] });
    expect(rover.grid).toEqual([12, 12]);
  });
  it("assumes a default grid if none is provided", () => {
    const rover = new Rover({});
    expect(rover.grid).toEqual([10, 10]);
  });
  it("accepts a starting orientation", () => {
    const rover = new Rover({ orientation: "W" });
    expect(rover.orientation).toEqual("W");
  });
  it("begins facing north if no orientation is provided", () => {
    const rover = new Rover({});
    expect(rover.orientation).toEqual("N");
  });
  //   it("can identify obstacles", () => {});
  //   it("does not move through obstacles", () => {});
  it("accepts and obeys a list of commands", () => {
    const rover = new Rover({});
    expect(rover.location).toEqual([0, 0]);
    expect(rover.orientation).toEqual("N");

    expect(rover.move("MMRMMMLM")).toEqual("[3,3] N");
  });

  //   it("ultimately returns it's final coordiates and orientation after completing it's commands", () => {});
});
