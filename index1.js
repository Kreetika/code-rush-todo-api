//http import garya jastai express import garya
const express = require("express");
const bodyParser = require("body-parser");
const { response, request } = require("express");

//euta API app jasto banayeko jasle express use garchha
//app chai aba euat express app bhayo
const app = express();

app.use(bodyParser.json());

const isValidToken = (token) => {
  return true;
};

const function1 = (request, response, next) => {
  const requestBody = request.body;

  console.log(requestBody);

  if (!requestBody.id || !requestBody.firstName || !requestBody.lastName) {
    response.json({
      message: "Invalid arguments",
    });
  }

  if (!requestBody.token) {
    response.json({
      message: "Token is required",
    });
  }

  const isValid = isValidToken(requestBody.token);

  if (!isValid) {
    response.json({
      message: "Token is not valid",
    });
  }

  request.body.isSuccessfullyVerified = true;

  next();
};

const function2 = (request, response, next) => {
  console.log("Invoked");

  response.json({
    name: "todo-api",
    version: "1.0.0",
  });
};

//route banayeko
app.post("/", function1, function2);

app.get("/users", (request, response, next) => {
  const usersJson = require("./users.json");

  response.json(usersJson);
});

app.get("/users/:userId", (request, response, next) => {
  const userId = +request.params.userId;

  const usersJson = require("./users.json");

  const requestedUser = usersJson.find((user) => user.id === userId);

  if (!requestedUser) {
    response.json({
      message: "Cannot find the user with id" + userId,
    });
  }

  response.json(requestedUser);
});

//yo function ko kaam - port open bhaisakepachi chai k sisplay garne bhanera console logma aauchha
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
