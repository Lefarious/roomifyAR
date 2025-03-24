const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();

const connectDb = require('./config/dbConnection');
const validateToken = require('./middleware/validateTokenHandler');
connectDb();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/users/", require("./routes/userRoutes"));
app.use("/api/manufacturers/", require("./routes/manufacturerRoutes"));
app.use("/api/commercialFurniture/", require("./routes/commercialFurnitureModelRoutes"));
app.use("/api/indieFurniture/", require("./routes/indieFurnitureModelRoutes"));
app.use("/api/rooms/", require("./routes/roomRoutes"));
app.use("/api/roomBoard/", require("./routes/roomBoardRoutes"));

//app.use("/api/users/current",validateToken);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});