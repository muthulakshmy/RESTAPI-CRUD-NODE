const http = require("http");
const getReq=require("./methods/get-request");
const postReq=require("./methods/post-request");
const deleteReq=require("./methods/delete-request");
const putReq=require("./methods/put-request");
let movies = require("./data/movies.json");

require("dotenv").config();
const PORT = process.env.PORT || 5001;


const server = http.createServer((req, res) => {
    req.movies=movies;
  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;
  }
  res.statusCode = 404;
  // res.setHeader("Content-Type", "application/json");
  // res.write(
  //   JSON.stringify({ title:"Not Found",message: "Route Not Found" })
  // );
  // res.end();
});

server.listen(PORT, () => {
  console.log(`server started on port : ${PORT}`);
});
