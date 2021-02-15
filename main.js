let currentBankBalance = Number(document.getElementById("bank-balance").innerHTML = 0)
let salary = Number(document.getElementById("salary").innerHTML = 0)
let loanAmount = 0;
let computerBought = true
let loanPaidBack = true

function getLoan() {
    loanAmount = Number(prompt("How much money do you need?", "Insert euros"))
    if (loanAmount == null || loanAmount == "" || loanAmount == 0) {
        alert("You have cancelled the loan request.")
        loanAmount = 0
        return
    } else if (!computerBought && !loanPaidBack) {
        alert("You have to buy a computer or pay back before getting another loan!")
        return
    }
    else if (loanAmount > currentBankBalance * 2) {
        alert("You can't have that much loan!")
        loanAmount = 0
        return
    } else {
        alert(loanAmount + " euros added to your bank balance.")
        currentBankBalance += loanAmount
        computerBought = false
        loanPaidBack = false
        document.getElementById("bank-balance").innerHTML = currentBankBalance + " €"
        document.getElementById("outstanding-loan").innerHTML = "Outstanding loan"
        document.getElementById("outstanding-loan-amount").innerHTML = loanAmount + " €"
        document.getElementById("pay-loan-button").innerHTML = "<button type='button' class='btn btn-danger' style='width:100%;margin-top:40px;' onclick='payLoan()'>Pay Loan</button>"
    }
}

function getPaid() {
    if (Number(loanAmount) <= 0) {
        salary += 100
        document.getElementById("salary").innerHTML = salary + " €"
        document.getElementById("outstanding-loan-amount").innerHTML = ""
        document.getElementById("pay-loan-button").innerHTML = ""
        document.getElementById("outstanding-loan").innerHTML = ""
        loanAmount = 0
        loanPaidBack = true
    } else {
        salary += 90
        loanAmount -= 10
        document.getElementById("outstanding-loan-amount").innerHTML = loanAmount
        document.getElementById("salary").innerHTML = salary + " €"
    }

}

function deposit() {
    currentBankBalance += salary
    salary = 0
    alert("Transferring salary to the bank...")
    document.getElementById("bank-balance").innerHTML = currentBankBalance + " €"
    document.getElementById("salary").innerHTML = salary + " €"
}

function payLoan() {
    if (loanAmount <= salary) {
        loanAmount = 0
        document.getElementById("outstanding-loan-amount").innerHTML = ""
        document.getElementById("pay-loan-button").innerHTML = ""
        document.getElementById("outstanding-loan").innerHTML = ""
    } else {
        loanAmount -= salary
        document.getElementById("outstanding-loan-amount").innerHTML = loanAmount + " €"
    }

    if (loanAmount == 0) { loanPaidBack = true }
    salary = 0
    document.getElementById("salary").innerHTML = salary
}

const computers = {
    intol: { "price": "700", "name": "Intol Celeroon E10", "desc": "Very good laptop. Has everything you need. Nothing else.", "features": "Screen, trackpad, keyboard", "img": "https://www.kenyatronics.com/images/getImage/phpldFYWT/800" },
    asus: { "price": "3000", "name": "Asus Super 6000", "desc": "Gaming beast of a machine. 64GB RAM, RTX4090Ti and everything else!", "features": "Very much power. Also expensive.", "img": "https://www.bhphotovideo.com/images/images2500x2500/asus_g512li_rs73_rog_strix_g15_i7_10750h_1566741.jpg" },
    basic: { "price": "300", "name": "Really Basic V.1", "desc": "Basic laptop for basic people. Not so smart, but not so expensive either.", "features": "Nothing that a PC doesn't need.", "img": "https://www.notebookcheck.net/uploads/tx_nbc2/hpG4_2_02.jpg" },
    workhorse: { "price": "1900", "name": "Work Horse WH100", "desc": "For someone who actually has to work! Has everything and beyond. Not for gaming.", "features": "Billions of pixels. 16K WQHD Screen.", "img": "https://i.gadgets360cdn.com/products/laptops/large/1546453592_635_hp_spectre-x360-13-ae502tu.jpg" }
}

function pcSelect() {
    let selected = document.getElementById("pc-select").value
    document.getElementById("pc-price").innerHTML = computers[selected].price + " €"
    document.getElementById("pc-name").innerHTML = computers[selected].name
    document.getElementById("pc-desc").innerHTML = computers[selected].desc
    document.getElementById("pc-specs").innerHTML = computers[selected].features
    document.getElementById("pc-img").src = computers[selected].img
}

function buyPc() {
    let selected = document.getElementById("pc-select").value
    if (currentBankBalance >= Number(computers[selected].price)) {
        currentBankBalance -= Number(computers[selected].price)
        document.getElementById("bank-balance").innerHTML = currentBankBalance + " €"
        alert("You bought a laptop!")
        computerBought = true
    } else {
        alert("You don't have enough money!")
    }
}