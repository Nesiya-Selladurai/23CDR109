const express = require("express");

const logger = require("./middleware/logger");

const notificationRoutes =
    require("./routes/notificationRoutes");

const app = express();

app.use(express.json());

/*
    Logging Middleware
*/
app.use(logger);

/*
    Notification Routes
*/
app.use("/notifications", notificationRoutes);

const PORT = 3000;

app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );
});