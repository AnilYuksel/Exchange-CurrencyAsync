class Currency {
  constructor() {
    this.url =
      "http://api.exchangeratesapi.io/v1/latest?access_key=37bf95d17ed1f58af30d7e3591f648f0&format=1";
  }
  async exchange() {
    const amount = await fetch(this.url);
    const currency = await fetch(this.url);

    const moneyamount = await amount.json();

    return { input: moneyamount };
  }
}
