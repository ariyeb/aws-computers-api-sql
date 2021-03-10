const express = require('express');
const cors = require('cors');

const sequelize = require('./db/sequelize');
const computerRouter = require('./routers/computersRouter');
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(computerRouter);

sequelize.sync()
    .then(() => app.listen(port, () => console.log("Server connectes, port:", port)))
    .catch(err => console.log(err));