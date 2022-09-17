import { test, expect, describe } from "vitest";
import { PokerHand } from "../../classes/PokerHand";

describe("PokerHand class", () => {
  test("fromString throws on invalid input", () => {
    expect(() => PokerHand.fromString("2H 2H 2H")).toThrow();
    expect(() => PokerHand.fromString("2H 2H 2H 2H 2H 2H")).toThrow();
    expect(() => PokerHand.fromString("2H 2H 2H 2H 2H 2H")).toThrow();
  });

  test("fromString returns a PokerHand", () => {
    const pokerHand = PokerHand.fromString("2H 3D 5S 9C KD");
    expect(pokerHand).toBeInstanceOf(PokerHand);
    expect(pokerHand.cards).toHaveLength(5);
  });

  test("fromString returns a PokerHand with correct cards", () => {
    const pokerHand = PokerHand.fromString("2H 3D 5S 9C KD");
    expect(pokerHand.cards).toEqual([
      { rank: "2", suit: "H" },
      { rank: "3", suit: "D" },
      { rank: "5", suit: "S" },
      { rank: "9", suit: "C" },
      { rank: "K", suit: "D" },
    ]);
  });

  test("toString returns a string", () => {
    const pokerHand = PokerHand.fromString("2H 3D 5S 9C KD");
    expect(pokerHand.toString()).toBe("2H 3D 5S 9C KD => High Card");
  });

});
