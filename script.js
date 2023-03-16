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

depositButton.onclick = () => harizChecking.deposit(Number(amountInput.value))

console.log(harizChecking.balance)
// harizChecking.deposit(100)
// harizChecking.deposit(5000)
// harizChecking.withdraw(500)
// harizChecking.withdraw(9000)
