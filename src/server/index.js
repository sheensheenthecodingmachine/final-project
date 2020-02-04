const createApp = require("./app.js").default;

const app = createApp().listen(8081, () =>
  console.log("Example app listening on port 8081!")
);

module.exports.default = app;
