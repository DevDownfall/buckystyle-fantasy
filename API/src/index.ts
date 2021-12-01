import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
const rfs = require('rotating-file-stream')
import logger from './utilities/config/winston.js'
import path from 'path'

const app = express();

app.use(compression());
app.use(helmet());
app.use(express.json({ limit: '1mb' }));
app.use(
    cors({
        origin: ['https://localhost:3000', 'https://downfall.dev'],
        methods: ['GET', 'POST', 'OPTIONS'],
        credentials: true,
        preflightContinue: true,
    })
);

// // Log Requests to file
// app.use(morgan("combined", { stream: logger.stream.write }));
// app.use(async (err: any, req: any, res: any, next: any) => {
//     logger.error(`${req.method} - ${err.message}  - ${req.originalUrl} - ${req.ip}`);
//     next(err)
// }) 
// create a Morgan middleware instance
const morganMiddleware = morgan("combined", {
    // specify a function for skipping requests without errors
    skip: (req, res) => res.statusCode < 400,
    stream: {
        write: (msg) => logger.http(msg)
    }
});
app.use(morganMiddleware);


// End of File Logging

app.get('/', (req, res) => {
    res.send({ msg: 'Pong!' });
    logger.info("A root link has been accessed!");
});

app.use('/api/v1', require('./v1/router'));

// Capture 404 erors
app.use((req,res,next) => {
    res.status(404).send("PAGE NOT FOUND");
    logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
})

app.listen(3001, () => {
    console.log(`API Running on 3001`);
});
