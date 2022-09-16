import { InvalidCardFormatError } from "../errors/InvalidCardFormatError";

export class Card {
  rank: string;
  suit: string;

  constructor(rank: string, suit: string) {
    this.rank = rank;
    this.suit = suit;
  }

  static fromString(card: string): Card {
    if (
      (card.length !== 2 && card[0]) ||
      typeof card[0] !== "string" ||
      typeof card[1] !== "string" ||
      !card.match(/^[2-9TJQKA][CDHS]$/)
    ) {
      throw new InvalidCardFormatError(card);
    }

    return new Card(card[0], card[1]);
  }

  toString(): string {
    return `${this.rank}${this.suit}`;
  }
}
