const amountInput = document.getElementById("amount");
const firstCurrency = document.getElementById("firstCurrency");
const secondCurrency = document.getElementById("secondCurrency");

const currency = new Currency();
const functions = new Function();
const ui = new UI(firstCurrency,secondCurrency)

eventListener();

function eventListener() {
  amountInput.addEventListener("input", currencyConverter);
  secondCurrency.onchange = function () {
    functions.changeSecondSelect(
      secondCurrency.options[secondCurrency.selectedIndex].textContent
    );
    ui.changeName()
  };
}

function currencyConverter() {
  currency
    .exchange()
    .then((response) => {
      const money = Number(amountInput.value);
      const money2 =
        response.input.rates[
          secondCurrency.options[secondCurrency.selectedIndex].textContent
        ];
      let finalValue = money * money2;
      ui.addResult(finalValue)
      
    })
    .catch((err) => console.log(err));
}
