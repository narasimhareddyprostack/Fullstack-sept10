class BankAccount {
  account_No = 95951619191;
  name = "narasimha Reddy";
  email = "greetlabs@gmail.com";
  openAccount() {
    console.log("Account Opening.... In Process");
  }
  deposit() {}
  withdrawl() {}
  getStatement() {}
  closeAccount() {}
}
var account = new BankAccount();
console.log("Account Holder Name:", account.name);
account.openAccount();
