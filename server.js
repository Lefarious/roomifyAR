const express = require('express');
const dotenv = require('dotenv');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});