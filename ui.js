class UI {
  constructor(firstvalue,secondvalue){
    this.firstvalue=firstvalue;
    this.secondvalue=secondvalue

    this.secondSelect = document.getElementById("secondCurrency")
    this.result = document.getElementById("outputResult")
    this.moneyName = document.getElementById("outputSecond")
  }


  changeName(){
    this.moneyName.textContent = this.secondvalue.options[this.secondvalue.selectedIndex].textContent
  }

  addResult(total){
    this.result.value = total
  }
}