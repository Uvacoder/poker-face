import { PokerHand } from "../classes/PokerHand";
import { PokerHands } from "../enums/PokerHands";

export const revealPokerHand = (hand: PokerHand): string => {
  let isPair = false;
  let isThreeOfKind = false;
  let isFourOfKind = false;
  let isFlush = false;
  let pairCounter = 0;

  const cardIndex = (card: string) => "A23456789TJQK".indexOf(card);
  const cards = [...hand.cards].sort((a, b) => {
    const rankIndex = cardIndex(a.rank);
    const previousRankIndex = cardIndex(b.rank);
    return rankIndex - previousRankIndex;
  });

  cards.forEach((currentCard) => {
    const isCurrentPair =
      cards.filter((card) => card.rank === currentCard.rank).length === 2;
    isPair = isPair || isCurrentPair;
    isThreeOfKind =
      isThreeOfKind ||
      cards.filter((card) => card.rank === currentCard.rank).length === 3;
    isFourOfKind =
      isFourOfKind ||
      cards.filter((card) => card.rank === currentCard.rank).length === 4;
    isFlush =
      isFlush ||
      cards.filter((card) => card.suit === currentCard.suit).length === 5;
    pairCounter = isCurrentPair ? pairCounter + 1 : pairCounter;
  });

  const isStraight = cards.every((card, index) => {
    const previousCard = cards[index - 1];
    if (index === 0 || !previousCard) {
      return true;
    }

    // Ace can be low or high
    if (card.rank === "T" && previousCard.rank === "A") {
      return true;
    }

    return cardIndex(card.rank) === cardIndex(previousCard.rank) + 1;
  });

  const isTwoPair = pairCounter > 2;
  const isFullHouse = isThreeOfKind && isPair;

  if (isFlush && isStraight) {
    if (cards[0]?.rank === "A" && cards[1]?.rank === "T") {
      return PokerHands.RoyalFlush;
    }

    return PokerHands.StraightFlush;
  }

  if (isFlush) {
    return PokerHands.Flush;
  }

  if (isStraight) {
    return PokerHands.Straight;
  }

  if (isFourOfKind) {
    return PokerHands.FourOfKind;
  }

  if (isFullHouse) {
    return PokerHands.FullHouse;
  }

  if (isThreeOfKind) {
    return PokerHands.ThreeOfKind;
  }

  if (isTwoPair) {
    return PokerHands.TwoPair;
  }

  if (isPair) {
    return PokerHands.Pair;
  }

  return PokerHands.HighCard;
};
