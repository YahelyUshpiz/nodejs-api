import { createLogger, transports, format } from "winston";

export const logger = createLogger({
  transports: [
    new transports.Console(),
    new transports.File({
      level: "info",
      filename: "./logs/logsInfo.log",
    }),
    new transports.File({
      level: "warn",
      filename: "./logs/logsWarnings.log",
    }),
    new transports.File({
      level: "error",
      filename: "./logs/logsErrors.log",
    }),
  ],
  format: format.combine(
    format.timestamp(),
    format.json(),
    format.metadata()
    // format.prettyPrint()
  ),
});
