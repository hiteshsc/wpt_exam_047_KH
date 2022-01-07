const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbconfig = {
  host: "localhost",
  user: "hitesh",
  password: "welcome",
  database: "wpt",
};

const addMessage = async (msg) => {
  const connection = mysql.createConnection(dbconfig);
  await connection.connectAsync();
  let sql = `insert into MESSAGE values("${msg.value}")`;
  await connection.queryAsync(sql);
  await connection.endAsync();
  //   console.log("Connection establish");
};

const getMessages = async () => {
  const connection = mysql.createConnection(dbconfig);
  await connection.connectAsync();
  let sql = `select * from MESSAGE`;
  const list = await connection.queryAsync(sql);
  await connection.endAsync();
  console.log(list);
  return list;
  //   console.log("Connection establish");
};

// addMessage({ value: "insertedd?" });
// getMessages();
module.exports = { addMessage, getMessages };

// Create a backend Restful Application, and design the following API. [10 Marks]
// ● An API that creates message records in the MESSAGE TABLE.
// ● An Api that read all the messages from the MESSAGE table.
// ● Test the API using POSTMAN.
// ● FRONTEND INTEGRATION IS OPTIONAL
// ● SHARE THE SCREENSHOT OF POSTMAN OUTPUT
