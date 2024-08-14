const fs = require("fs");
const path = require("path");

module.exports = (data) => {
    console.log("daat to write")
  try {
    fs.writeFileSync(
      path.join(
        __dirname,
        "..",
        "data",
        "movies.json"),
        JSON.stringify(data),
        "utf-8"
      
    );
  } catch (e) {
    console.log(e);
  }
};
