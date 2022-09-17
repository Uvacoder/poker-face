import { test, expect, describe } from "vitest";
import { PokerHand } from "../../classes/PokerHand";
import { PokerHands } from "../../enums/PokerHands";
import { revealPokerHand } from "../../utils/revealPokerHand";

describe("revealPokerHand function", () => {
  test("returns a high card hand", () => {
    const hand: PokerHand = {
      cards: [
        { rank: "3", suit: "D" },
        { rank: "2", suit: "S" },
        { rank: "9", suit: "C" },
        { rank: "A", suit: "H" },
        { rank: "K", suit: "D" },
      ],
    };
    const result = revealPokerHand(hand);
    expect(result).toBe(PokerHands.HighCard);
  });
    

  test("One Pair contains one number that occurs twice", () => {
    const hand: PokerHand = {
      cards: [
        { rank: "3", suit: "D" },
        { rank: "2", suit: "S" },
        { rank: "9", suit: "C" },
        { rank: "2", suit: "H" },
        { rank: "K", suit: "D" },
      ],
    };
    const result = revealPokerHand(hand);
    expect(result).toEqual(PokerHands.Pair);
  });

  test("Two Pair contains two different numbers which occur twice", () => {
    const hand: PokerHand = {
      cards: [
        { rank: "3", suit: "D" },
        { rank: "2", suit: "S" },
        { rank: "9", suit: "C" },
        { rank: "2", suit: "H" },
        { rank: "3", suit: "D" },
      ],
    };
    const result = revealPokerHand(hand);
    expect(result).toEqual(PokerHands.TwoPair);
  });

  test("Three of a kind contains one number that occurs three times", () => {
    const hand: PokerHand = {
      cards: [
        { rank: "3", suit: "D" },
        { rank: "2", suit: "S" },
        { rank: "9", suit: "C" },
        { rank: "2", suit: "H" },
        { rank: "2", suit: "D" },
      ],
    };
    const result = revealPokerHand(hand);
    expect(result).toEqual(PokerHands.ThreeOfKind);
  });

  test("Four of a kind contains one number that occurs four times", () => {
    const hand: PokerHand = {
      cards: [
        { rank: "3", suit: "D" },
        { rank: "2", suit: "S" },
        { rank: "2", suit: "C" },
        { rank: "2", suit: "H" },
        { rank: "2", suit: "D" },
      ],
    };
    const result = revealPokerHand(hand);
    expect(result).toEqual(PokerHands.FourOfKind);
  });

  test("Straight contains 5 cards in sequence", () => {
    const hand: PokerHand = {
      cards: [
        { rank: "3", suit: "D" },
        { rank: "4", suit: "S" },
        { rank: "5", suit: "C" },
        { rank: "6", suit: "H" },
        { rank: "7", suit: "D" },
      ],
    };
    const result = revealPokerHand(hand);
    expect(result).toEqual(PokerHands.Straight);
  });

  test("Flush contains 5 cards all with the same letter", () => {
    const hand: PokerHand = {
      cards: [
        { rank: "3", suit: "D" },
        { rank: "4", suit: "D" },
        { rank: "6", suit: "D" },
        { rank: "6", suit: "D" },
        { rank: "7", suit: "D" },
      ],
    };
    const result = revealPokerHand(hand);
    expect(result).toEqual(PokerHands.Flush);
  });

  test("Full house contains two different numbers, one which occurs twice and the other which occurs three times", () => {
    const hand: PokerHand = {
      cards: [
        { rank: "3", suit: "D" },
        { rank: "3", suit: "S" },
        { rank: "5", suit: "C" },
        { rank: "5", suit: "H" },
        { rank: "5", suit: "D" },
      ],
    };
    const result = revealPokerHand(hand);
    expect(result).toEqual(PokerHands.FullHouse);
  });

  test("Straight flush contains 5 cards in a sequence with the same letter", () => {
    const hand: PokerHand = {
      cards: [
        { rank: "3", suit: "D" },
        { rank: "4", suit: "D" },
        { rank: "5", suit: "D" },
        { rank: "6", suit: "D" },
        { rank: "7", suit: "D" },
      ],
    };
    const result = revealPokerHand(hand);
    expect(result).toEqual(PokerHands.StraightFlush);
  });

  test("Royal flush contains 5 cards in sequence with the same letter and containing the letter A and K", () => {
    const hand: PokerHand = {
      cards: [
        { rank: "T", suit: "D" },
        { rank: "K", suit: "D" },
        { rank: "Q", suit: "D" },
        { rank: "J", suit: "D" },
        { rank: "A", suit: "D" },
      ],
    };
    const result = revealPokerHand(hand);
    expect(result).toEqual(PokerHands.RoyalFlush);
  });

  test("Ace can be at the start or end of a Straight or Straight Flush", () => {
    const hand: PokerHand = {
      cards: [
        { rank: "A", suit: "D" },
        { rank: "2", suit: "D" },
        { rank: "3", suit: "D" },
        { rank: "4", suit: "D" },
        { rank: "5", suit: "D" },
      ],
    };
    const result = revealPokerHand(hand);
    expect(result).toEqual(PokerHands.StraightFlush);

    const hand2: PokerHand = {
      cards: [
        { rank: "T", suit: "D" },
        { rank: "J", suit: "D" },
        { rank: "Q", suit: "D" },
        { rank: "K", suit: "D" },
        { rank: "A", suit: "S" },
      ],
    };
    const result2 = revealPokerHand(hand2);
    expect(result2).toEqual(PokerHands.Straight);

    const hand3: PokerHand = {
      cards: [
        { rank: "A", suit: "D" },
        { rank: "2", suit: "D" },
        { rank: "3", suit: "D" },
        { rank: "4", suit: "D" },
        { rank: "5", suit: "S" },
      ],
    };
    const result3 = revealPokerHand(hand3);
    expect(result3).toEqual(PokerHands.Straight);
  });
});
