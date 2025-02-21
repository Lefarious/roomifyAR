const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();

const connectDb = require('./config/dbConnection');
const validateToken = require('./middleware/validateTokenHandler');
connectDb();

const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/users/", require("./routes/userRoutes"));
//app.use(errorHandler);
//app.use("/api/users/current",validateToken);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});