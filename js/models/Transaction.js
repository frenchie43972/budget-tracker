export class Transaction {
  constructor(id, description, amount, type) {
    this.id = id;
    this.description = description;
    this.amount = amount;
    this.type = type;
  }
}

export default Transaction;
