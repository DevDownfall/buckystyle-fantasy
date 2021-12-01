const winston = require('winston');

const filter = (level) => winston.format((info) => {
  if (info.level === level) {
    return info;
  }
})();

const levels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  http: 5
}

const transports = [
  // create a logging target for errors and fatals
  new winston.transports.File({
    filename: "./src/logs/error.log",
    level: "error",
    format: winston.format.combine(
      // add a timestamp
      winston.format.timestamp(),
      // use JSON form
      winston.format.json()
    )
  }),
  // create a logging target for logs of different levels
  new winston.transports.File({
    filename: "./src/logs/combined.log",
    level: "info",
    // use simple form
    format: winston.format.simple()
  }),
  // create a logging target for HTTP logs
  new winston.transports.File({
    filename: "./src/logs/http.log",
    level: "http",
    // process only HTTP logs
    format: filter("http"),
  }),
  // create a logging target for debug logs
  new winston.transports.Console({
    level: "./src/logs/debug",
    // specify format for the target
    format: winston.format.combine(
      // process only debug logs
      filter("debug"),
      // colorize the output
      winston.format.colorize(),
      // add a timestamp
      winston.format.timestamp(),
      // use simple form
      winston.format.simple()
    )
  }),
];

// create a Winston logger
const logger = winston.createLogger({
  // specify the own log levels system
  levels,
  // specify the logging targets
  transports
});

module.exports = logger;