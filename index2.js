const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
// connection for mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "node",
  password: "parth123",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let data = [];
for (let i = 1; i <= 100; i++) {
  data.push(getRandomUser()); // 100 fake users data
}

try {
  connection.query(q, [data], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

connection.end();
