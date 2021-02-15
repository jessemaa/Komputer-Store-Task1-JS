let currentBankBalance = Number(document.getElementById("bank-balance").innerHTML)
console.log(currentBankBalance)
let computerBought = true
let loanPaidBack = true

function getLoan() {
    const loanAmount = Number(prompt("How much money do you need?", "Insert euros"))
    if (loanAmount == null || loanAmount == "") {
      alert("You have cancelled the loan request.")
      return
    } else if (!computerBought || !loanPaidBack) {
        alert("You have to buy a computer before getting another loan!")
        return
    } else if (loanAmount > currentBankBalance * 2) {
      alert("You can't have that much loan!")
      return
    } else {
        alert(loanAmount + " euros added to your bank balance.")
        computerBought = false
    }
    document.getElementById("bank-balance").innerHTML = currentBankBalance + loanAmount
    document.getElementById("outstanding-loan").innerHTML = "Outstanding loan"
    document.getElementById("outstanding-loan-amount").innerHTML = loanAmount
  }

function getPaid() {
    let salary = Number(document.getElementById("salary").innerHTML)
    salary += 100
    document.getElementById("salary").innerHTML = salary
}

function payLoan() {
    
}
  