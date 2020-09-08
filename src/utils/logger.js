import winston, { format } from "winston";

// export function info(text) {
//   console.log(`[${new Date().toISOString()}] [INFO] ${text}\n`);
// }

// export function error(text, err) {
//   if (err) {
//     console.log(
//       `[${new Date().toISOString()}] [ERROR] ${text}\n${err.toString()}\n`
//     );
//   }
//   console.log(`[${new Date().toISOString()}] [ERROR] ${text}\n`);
// }

// export function debug(text, params) {
//   console.log(
//     `[${new Date().toISOString()}] [DEBUG] ${text}\n${JSON.stringify(params)}\n`
//   );
// }

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

export default logger;
