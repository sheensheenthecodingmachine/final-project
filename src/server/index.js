
//start the server
const createApp = require("./app.js").default;

const app = createApp().listen(8081, () =>
  console.log("your server is running bish!")
);

module.exports.default = app;
