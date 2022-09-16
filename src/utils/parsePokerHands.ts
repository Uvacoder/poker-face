import { PokerHand } from "../classes/PokerHand";

export const parsePokerHands = (collectionOfHandsText: string): PokerHand[] => {
  const handsText = collectionOfHandsText.toUpperCase().split(/\r?\n/);

  const hands = handsText
    .filter(function (value) {
      const hasContent = value.length > 0;
      return hasContent;
    })
    .map((hand) => {
      return PokerHand.fromString(hand);
    });

  return hands;
};
