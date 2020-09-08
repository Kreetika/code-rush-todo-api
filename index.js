import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";

import routes from "./src/routes";
import logger from "./src/utils/logger";
import genericErrorHandler from "./src/middlewares/genericErrorHandler";

const loggingMiddleware = (req, res, next) => {
  const url = req.url;
  const method = req.method;

  logger.info(`${method} ${url}`);

  next();
};

//euta API app jasto banayeko jasle express use garchha
//app chai aba euta express app bhayo
const app = express();

app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(loggingMiddleware);
app.use(routes);
app.use(genericErrorHandler); //lastma lyayera rakheko ho -- sabbai error haru aayera accululate hune yei ho

dotenv.config();   //node process ko env ma chai env file ko kura inject garchha

//yo function ko kaam - port open bhaisakepachi chai k sisplay garne bhanera console logma aauchha
app.listen(process.env.APP_PORT, () => {
  console.log(`Listening on port ${process.env.APP_PORT}`);
});
