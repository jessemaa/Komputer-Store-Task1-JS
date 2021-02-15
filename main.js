let currentBankBalance = Number(document.getElementById("bank-balance").innerHTML = 0)
let salary = Number(document.getElementById("salary").innerHTML = 0)
let loanAmount = 0;

let computerBought = true
let loanPaidBack = true

console.log("balance"+currentBankBalance, "salary"+salary, "loan"+loanAmount)

function getLoan() {
    loanAmount = Number(prompt("How much money do you need?", "Insert euros"))
    if (loanAmount == null || loanAmount == "") {
      alert("You have cancelled the loan request.")
      return
    } else if (!computerBought || !loanPaidBack) {
        alert("You have to buy a computer before getting another loan or pay back first!")
        return
    } else if (loanAmount > currentBankBalance * 2) {
      alert("You can't have that much loan!")
      return
    } else {
        alert(loanAmount + " euros added to your bank balance.")
        currentBankBalance += loanAmount
        console.log("balance"+currentBankBalance)
        computerBought = false
    }
    document.getElementById("bank-balance").innerHTML = currentBankBalance+" €"
    console.log("balance"+currentBankBalance)
    document.getElementById("outstanding-loan").innerHTML = "Outstanding loan"
    document.getElementById("outstanding-loan-amount").innerHTML = loanAmount+" €"
    document.getElementById("pay-loan-button").innerHTML = "<button type='button' class='btn btn-danger' style='width:100%;margin-top:40px;' onclick='payLoan()'>Pay Loan</button>"
    console.log("loan"+loanAmount)
  }

function getPaid() {
    if (Number(loanAmount) == 0) {
        salary += 100
        document.getElementById("salary").innerHTML = salary+" €"
        console.log("salary"+salary)
    } else {
        salary += 90
        loanAmount -= 10
        document.getElementById("outstanding-loan-amount").innerHTML = loanAmount
        document.getElementById("salary").innerHTML = salary+" €"
    }

}

function deposit() {
    currentBankBalance += salary
    salary = 0
    alert("Transferring salary to the bank...")
    document.getElementById("bank-balance").innerHTML = currentBankBalance+" €"
    console.log("balance"+currentBankBalance)
    document.getElementById("salary").innerHTML = salary+" €"
    console.log("salary"+salary)
}

function payLoan() {
    if (loanAmount <= salary) {
        loanAmount = 0
        document.getElementById("outstanding-loan-amount").innerHTML = ""
        document.getElementById("pay-loan-button").innerHTML = ""
        document.getElementById("outstanding-loan").innerHTML = ""
    } else {
        loanAmount -= salary
        document.getElementById("outstanding-loan-amount").innerHTML = loanAmount
    }
    salary = 0
    document.getElementById("salary").innerHTML = salary
}
  