class Person{
    constructor(){
        this.firstName;
        this.lastName;
        this.age;
        this.email;
        this.gender;
        this.mobileNumber;
        this.address;
    }

    getDetails(){
        console.log(`FirstName:${this.firstName}`);
        console.log(`LastName:${this.lastName}`);
        console.log(`Age:${this.age}`);
        console.log(`Email:${this.email}`);
        console.log(`Gender:${this.gender}`);
        console.log(`MobileNumber:${this.mobileNumber}`);
        console.log(`Address:${this.address}`);
        
    }
    
}
let person1=new Person();

person1.firstName='Vahitha';
person1.lastName='Banu';
person1.age=25;
person1.email='svahitha25@gmail.com';
person1.gender='Female';
person1.mobileNumber=9876543210;
person1.address='No.10,Sri Sabthagiri Nagar,Uppalavadi,Cuddalore';
person1.getDetails();
    