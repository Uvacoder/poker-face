export class InvalidCardFormatError extends Error {
  constructor(card: string) {
    super(`Invalid card format: ${card}`);
  }
}
