import { test, expect, describe } from "vitest";
import { parsePokerHands } from "../../utils/parsePokerHands";

describe("parsePokerHands function", () => {
  test("contains an array of 5 elements", () => {
    const result = parsePokerHands("2H 3D 5S 9C KD\n2C 3H 4S 8C AH");
    expect(result).toHaveLength(2);
    expect(result[0]?.cards).toHaveLength(5);
    expect(result[1]?.cards).toHaveLength(5);
  });

  test("contains the correct cards", () => {
    const result = parsePokerHands("2H 3D 5S 9C KD\n2C 3H 4S 8C AH");
    expect(result[0]?.cards).toEqual([
      { rank: "2", suit: "H" },
      { rank: "3", suit: "D" },
      { rank: "5", suit: "S" },
      { rank: "9", suit: "C" },
      { rank: "K", suit: "D" },
    ]);
    expect(result[1]?.cards).toEqual([
      { rank: "2", suit: "C" },
      { rank: "3", suit: "H" },
      { rank: "4", suit: "S" },
      { rank: "8", suit: "C" },
      { rank: "A", suit: "H" },
    ]);
  });

  test("throws an error for invalid poker hands", () => {
    expect(() => parsePokerHands("2H 3D 5S 9C KD\n2C 3H 4S 8C")).toThrow();

    // Incorrect ranks
    expect(() => parsePokerHands("HH DD SS CC DD")).toThrow();

    // Unknown suits
    expect(() => parsePokerHands("22 33 55 99 KK")).toThrow();
  });
});
