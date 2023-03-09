import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';

import api from './api';
import * as middlewares from './middleware/notFound';
import MessageResponse from './interfaces/MessageResponse';
import errorHandler from './middleware/errorHandler';

dotenv.config();

const app = express();

console.log('ENVIRONMENT: ', process.env.NODE_ENV);

app.use(morgan('dev'));
app.use(helmet());

// https://stackoverflow.com/questions/63351799/react-fetch-credentials-include-breaks-my-entire-request-and-i-get-an-error
app.use(
  cors({
    origin: process.env.BASE_URL, // (Whatever your frontend url is)
    credentials: true, // <= Accept credentials (cookies) sent by the client
  }),
);
app.use(cookieParser());
app.use(express.json());

app.get('*/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

// The order of these matter, consider refactoring middleware
app.use('/api/v1', api);
app.use(middlewares.notFound);
app.use(errorHandler); // Custom error middleware

export default app;
