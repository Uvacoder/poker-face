import { InvalidHandFormatError } from "../errors/InvalidHandFormatError";
import { revealPokerHand } from "../utils/revealPokerHand";
import { Card } from "./Card";

export class PokerHand {
  cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  static fromString(hand: string): PokerHand {
    const cardsString = hand.split(" ");
    if (cardsString.length !== 5) {
      throw new InvalidHandFormatError(hand);
    }

    const cards = cardsString.map((card) => Card.fromString(card));
    return new PokerHand(cards);
  }

  toString(): string {
    return `${this.cards.map((card) => card.toString()).join(" ")} => ${revealPokerHand(this)}`;
  }
}
