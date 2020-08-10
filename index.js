const server = require("./data/server.js");/// Importing server

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => { // listening for the port
  console.log(`\n***Server is running on port ${PORT}...***\n`);
});