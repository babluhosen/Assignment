let profile={
    fName: "John",
    lastName:"Doe"
};
//console .log(profile.name + ", " + profile.age + ", lives in " + profile.city);

// encapsolution ES6
class bankAcount{
      
   customerProfile(customer){
      return `Customer Detalis:\n First Name:${customer.fName}\n Last Name: ${customer.lastName}`;
      
   }
   constructor(accountNumber) {
    this.accountNumber = accountNumber;
    console.log(`A/c No.: ${accountNumber}`);  
  }

   #blance=100; // private property
 
    deposit(amount){
     this.#blance+= amount;
    }
 
   withdraw(amount){
        this.#blance-=amount;
    }
    checkBlance() {
        return this.#blance;
    }

}

const  myAccount = new bankAcount("123456789");
myAccount.deposit(amount=500);
myAccount.withdraw(amount=300);

console.log(myAccount.customerProfile(profile));
console.log(`Customer Blance is = `, myAccount.checkBlance() );