class Bank {
  constructor(balance) {
    this.name = name
    this.balance = balance
  }

  withdraw(amount) {
    // guard clause
    if (this.balance - amount <= 0) {
      console.log(`Sorry , your balance is insufficient`)
      console.log({ balance: this.balance })
      return
    }
    else {
      this.balance -= amount
      console.log(`Withdraw success!`, `$${amount}`)
      console.log(`The current balance is $${this.balance}`)
    }
  }

  deposit(amount) {
    this.balance += amount
    console.log(`Deposit success!`, `$${amount}`)
    console.log(`The current balance is $${this.balance}`)
  }

}


const harizChecking = new Bank(100)

const amountInput = document.getElementById('amount')
const depositButton = document.getElementById('deposit')
const withdrawButton = document.getElementById('withdraw')
const balanceDiv = document.getElementById('balance')

depositButton.onclick = () => {
  let amount = Number(amountInput.value)
  harizChecking.deposit(amount)
  balanceDiv.innerText = `Balance: ${harizChecking.balance}`
}

withdrawButton.onclick = () => {
  let amount = Number(amountInput.value)
  harizChecking.withdraw(amount)
  balanceDiv.innerText = `Balance: ${harizChecking.balance}`
}


// console.log(harizChecking.balance)
// harizChecking.deposit(100)
// harizChecking.deposit(5000)
// harizChecking.withdraw(500)
// harizChecking.withdraw(9000)
