const AbstractSeeder = require("./AbstractSeeder");

const data = [
  {
    firstname: "Jean",
    lastname: "Dubois",
    email: "Jean.Dubois@gmail.com",
    phone: "0601020304",
    hashed_password: "fakepassword123",
    role: "candidat",
  },
  {
    firstname: "Marie",
    lastname: "Martin",
    email: "Marie.Martin@yahoo.fr",
    phone: "0612345678",
    hashed_password: "fakepassword123",
    role: "consultant",
  },
  {
    firstname: "Pierre",
    lastname: "Lefevre",
    email: "Pierre.Lefevre@outlook.com",
    phone: "0712345678",
    hashed_password: "fakepassword123",
    role: "admin",
  },
  {
    firstname: "Sophie",
    lastname: "Leroy",
    email: "Sophie.Leroy@laposte.net",
    phone: "0756781234",
    hashed_password: "fakepassword123",
    role: "candidat",
  },
  {
    firstname: "Julie",
    lastname: "Moreau",
    email: "Julie.Moreau@orange.fr",
    phone: "0765432198",
    hashed_password: "fakepassword123",
    role: "consultant",
  },
  {
    firstname: "Antoine",
    lastname: "Garcia",
    email: "Antoine.Garcia@gmail.com",
    phone: "0601020304",
    hashed_password: "fakepassword123",
    role: "admin",
  },
  {
    firstname: "Lucie",
    lastname: "Bonnet",
    email: "Lucie.Bonnet@yahoo.fr",
    phone: "0612345678",
    hashed_password: "fakepassword123",
    role: "candidat",
  },
  {
    firstname: "Thomas",
    lastname: "Roux",
    email: "Thomas.Roux@outlook.com",
    phone: "0712345678",
    hashed_password: "fakepassword123",
    role: "consultant",
  },
  {
    firstname: "Camille",
    lastname: "Caron",
    email: "Camille.Caron@laposte.net",
    phone: "0756781234",
    hashed_password: "fakepassword123",
    role: "admin",
  },
  {
    firstname: "Nicolas",
    lastname: "Girard",
    email: "Nicolas.Girard@orange.fr",
    phone: "0765432198",
    hashed_password: "fakepassword123",
    role: "candidat",
  },
  {
    firstname: "Alice",
    lastname: "Smith",
    email: "Alice.Smith@gmail.com",
    phone: "0708090101",
    hashed_password: "uniquepassword123",
    role: "admin",
  },
  {
    firstname: "Bob",
    lastname: "Johnson",
    email: "Bob.Johnson@yahoo.fr",
    phone: "0809101112",
    hashed_password: "uniquepassword123",
    role: "candidat",
  },
  {
    firstname: "Charlie",
    lastname: "Brown",
    email: "Charlie.Brown@outlook.com",
    phone: "0910111213",
    hashed_password: "uniquepassword123",
    role: "consultant",
  },
  {
    firstname: "Elise",
    lastname: "Dupont",
    email: "Elise.Dupont@gmail.com",
    phone: "0711223344",
    hashed_password: "newpassword123",
    role: "candidat",
  },
  {
    firstname: "Victor",
    lastname: "Durand",
    email: "Victor.Durand@yahoo.fr",
    phone: "0612345566",
    hashed_password: "newpassword123",
    role: "consultant",
  },
  {
    firstname: "Clara",
    lastname: "Fontaine",
    email: "Clara.Fontaine@outlook.com",
    phone: "0712345679",
    hashed_password: "newpassword123",
    role: "admin",
  },
  {
    firstname: "Alex",
    lastname: "Mercier",
    email: "Alex.Mercier@laposte.net",
    phone: "0756781235",
    hashed_password: "newpassword123",
    role: "candidat",
  },
  {
    firstname: "Emma",
    lastname: "Bernard",
    email: "Emma.Bernard@orange.fr",
    phone: "0765432100",
    hashed_password: "newpassword123",
    role: "consultant",
  },
  {
    firstname: "Louis",
    lastname: "Richard",
    email: "Louis.Richard@gmail.com",
    phone: "0601020310",
    hashed_password: "newpassword123",
    role: "admin",
  },
  {
    firstname: "Manon",
    lastname: "Robert",
    email: "Manon.Robert@yahoo.fr",
    phone: "0612345670",
    hashed_password: "newpassword123",
    role: "candidat",
  },
];

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

  run() {
    data.forEach((user, index) => {
      const newUser = { ...user, refName: `user_${index}` };
      this.insert(newUser);
    });
  }
}

module.exports = UserSeeder;