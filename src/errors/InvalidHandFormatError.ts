export class InvalidHandFormatError extends Error {
  constructor(hand: string) {
    super(`Invalid hand format: ${hand}`);
  }
}
