import MarsRover from "../mars_rover";

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
		["0:1:N", "M"],
		["0:2:N", "MM"],
		["0:0:N", "MMMMMMMMMM"],
		["1:0:E", "RM"],
		["1:0:E", "RMMMMMMMMMMM"],
		["9:0:W", "LM"],
		["8:0:W", "LMM"],
		["0:0:W", "LMMMMMMMMMM"],
		["9:0:W", "LMMMMMMMMMMM"],
		["0:9:S", "LLM"],
		["0:9:S", "LLMMMMMMMMMMM"],
	])("return %p when sent command %p", (expectedResponse, command) => {
		const marsRover = new MarsRover();
		const response = marsRover.execute(command);
		expect(response).toBe(expectedResponse);
	});
});
