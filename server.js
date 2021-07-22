const { request } = require("express");
const express = require("express");
const app = express();
const faker = require("faker");

class User{
    constructor(){
      this.firstName = faker.name.firstName();
      this.lastName = faker.name.lastName();
      this.phone = faker.phone.phoneNumber();
      this.email = faker.internet.email();
      this.password = faker.internet.password();
    }
}

 var newUser = [];

 class Company{
   constructor(){
     this.name = faker.company.companyName();
     this.address = [
       {street: faker.address.streetAddress()},
       {city: faker.address.city()},
       {state: faker.address.state()},
       {zipcode: faker.address.zipCode()},
       {country: faker.address.country()}
     ]
   }
 }

 var newCompany = [];


const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);


//Middleware functions
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//Create Methods
app.get("/api/users/new", (req, res) => {
  newUser.push(new User());
  console.log(newUser)
  res.json( { status: "ok" } );
});

app.get("/api/companies/new", (req,res) => {
  newCompany.push(new Company());
  console.log(newCompany);
  res.json( { status: "ok"} );
})



app.get("/api/users/companies/new", (req,res) => {
  newUser.push(new User());
  newCompany.push(new Company());
  console.log(newUser, newCompany);
  res.json( { status: "ok"} );
})


//View All Users
app.get("/api/users", (req, res) => {
  res.json(newUser);
});


//View All Companies
app.get("/api/companies", (req, res) => {
  res.json(newCompany);
});
