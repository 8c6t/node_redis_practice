const express = require('express');
const morgan = require('morgan');

const cache = require('./cache');
const userRouter = require('./routes/user');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use((req, res, next) => {
  req.cache = cache;
  next();
});

app.use('/user', userRouter);

app.listen(8080, () => {
  console.log('server is running on 8080');
});
