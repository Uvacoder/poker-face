import { test, expect, describe } from "vitest";
import { Card } from "../../classes/Card";

describe("Card class", () => {
  // from string throws on invalid input
  test("fromString throws on invalid input", () => {
    expect(() => Card.fromString("HH")).toThrow();
    expect(() => Card.fromString("22")).toThrow();
    expect(() => Card.fromString("2SS")).toThrow();
  });

  // from string returns a card
  test("fromString returns a card", () => {
    const card = Card.fromString("2H");
    expect(card).toBeInstanceOf(Card);
    expect(card.rank).toBe("2");
    expect(card.suit).toBe("H");
  });

  // from string returns a card with correct rank
  test("fromString returns a card with correct rank", () => {
    const card = Card.fromString("2H");
    expect(card.rank).toBe("2");
  });

  // from string returns a card with correct suit
  test("fromString returns a card with correct suit", () => {
    const card = Card.fromString("2H");
    expect(card.suit).toBe("H");
  });

  // to string returns a string
  test("toString returns a string", () => {
    const card = Card.fromString("2H");
    expect(card.toString()).toBe("2H");
  });
});
