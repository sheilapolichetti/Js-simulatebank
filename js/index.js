//

const accountObject = {
    accountName: "Sheila",
    balance: 100,
    getBalance: function (){
        return this.balance
    },
    deposit: function (message) {

        let amount = parseFloat(prompt(message));
        if (isNaN(amount) || amount <= 0) {
            this.deposit("Invalid input, only numbers greater than 0")
            return this.balance
        }
        this.balance += amount
        alert("New balance: " + this.balance)
    },

    withdrawal: function (message) {

        let amount = parseFloat(prompt(message));
        if (isNaN(amount) || amount <= 0) {
            this.withdrawal("Invalid input, only numbers greater than 0")
            return
        }
        if (amount > this.balance ) {
            alert("Not enough funds")
            return 
        }
        this.balance -= amount
        alert("New balance: " + this.balance)
    },

    getAccountName: function () {

        return this.accountName
    
    },
    accountError: function (params) {
        
    },
    exitAccount: function (params) {
        
    },

}

function atm() {
    let choice = parseInt(prompt("Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"));
    
    switch (choice) {

        case 1:
          alert(accountObject.getBalance());
          atm();
          break;
        case 2:
           accountObject.deposit("How much would you like to deposit?");
           atm();
          break;
        case 3:
          accountObject.withdrawal("How much would you like to withdraw?");
          atm();
          break;
        case 4:
          alert(accountObject.accountName)
          atm()
          break;
          case 5:
          window.close()
          break;
      }
     // atm();
}

atm()

console.log(accountObject.balance)