import MarsRover from "../mars_rover";

// Step 1

describe("Mars Rover should", () => {
	it("return '0:0:W' when sent 'L'", () => {
		const marsRover = new MarsRover();
		const response = marsRover.execute("L");
		expect(response).toBe("0:0:W");
	});
});

// Step 2

describe("Mars Rover should", () => {
	it("return '0:0:W' when sent 'L'", () => {
		const marsRover = new MarsRover();
		const response = marsRover.execute("L");
		expect(response).toBe("0:0:W");
	});
	it("return '0:0:S' when sent 'LL'", () => {
		const marsRover = new MarsRover();
		const response = marsRover.execute("LL");
		expect(response).toBe("0:0:S");
	});
	it("return '0:0:S' when sent 'LLL'", () => {
		const marsRover = new MarsRover();
		const response = marsRover.execute("LLL");
		expect(response).toBe("0:0:E");
	});
});


// Once we have all the tests, we can refactor into parameterized tests, etc..
describe("Mars Rover should", () => {
	it.each([
		["0:0:W", "L"],
		["0:0:S", "LL"],
		["0:0:E", "LLL"],
		["0:0:N", "LLLL"],
		["0:0:E", "R"],
		["0:0:S", "RR"],
		["0:0:W", "RRR"],
		["0:0:N", "RRRR"],
	])("return %p when sent command %p", (expectedResponse, command) => {
		const marsRover = new MarsRover();
		const response = marsRover.execute(command);
		expect(response).toBe(expectedResponse);
	});
});

// Movement

describe("Mars Rover should", () => {
	it("return '0:1:N' when sent 'M' whilst facing North", () => {
		const marsRover = new MarsRover();
		const response = marsRover.execute("M");
		expect(response).toBe("0:1:N");
	});
	it("return '1:0:W' when sent 'M' whilst facing West", () => {
		const marsRover = new MarsRover();
		const response = marsRover.execute("RM");
		expect(response).toBe("1:0:W");
	});
});


