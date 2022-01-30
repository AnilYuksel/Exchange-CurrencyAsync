class Function {
  constructor() {
    this.amountInput = document.getElementById("amount");
    this.secondCurrency = document.getElementById("secondCurrency");
  }

  changeSecondSelect(newSecondCurrency) {
    this.secondCurrency = newSecondCurrency;
  }
}
