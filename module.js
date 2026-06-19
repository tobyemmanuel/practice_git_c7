export const vat = 7.5;

export function amount() {
  return 1000;
}

export class Payment {
  constructor(payer) {
    this.payer = payer;
  }

  fetchPayer() {
    return this.payer;
  }
}
