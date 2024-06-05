import express from "express";
import expressWinston from "express-winston";
import { router as userRouter } from "./routes/UserRoute.js";
import { logger } from "./logger.js";
import { transports, format } from "winston";

const PORT = 3000;
const app = express();

app.use(
  expressWinston.logger({
    winstonInstance: logger,
    statusLevels: true,
  })
);

app.use("/user", userRouter);

app.get("/error", (req, res) => {
  throw new Error("This is a custom error");
});

app.use(
  expressWinston.errorLogger({
    transports: [
      new transports.File({
        filename: "./logs/logsInternalErrors.log",
      })
    ],
    format: format.combine(format.json(), format.timestamp())
  })
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
