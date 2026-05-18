const express = require("express");
const axios = require("axios");

const {
    getTopNotifications
} = require("../services/priorityService");

const router = express.Router();

router.get("/", async (req, res) => {

    try {

        let notifications = [];

        try {

            const response = await axios.get(
                "http://4.224.186.213/evaluation-service/notifications",
                {
                    headers: {
                        Authorization: "Bearer RyZBcy"
                    }
                }
            );

            notifications = response.data;

        } catch (apiError) {

            console.log(
                "External API failed. Using fallback data."
            );

            // Fallback mock data
            notifications = [

                {
                    ID: 1,
                    Type: "Placement",
                    Message: "Amazon Hiring",
                    Timestamp: "2026-05-18T10:00:00"
                },

                {
                    ID: 2,
                    Type: "Result",
                    Message: "Semester Results Published",
                    Timestamp: "2026-05-18T08:00:00"
                },

                {
                    ID: 3,
                    Type: "Event",
                    Message: "Tech Fest Tomorrow",
                    Timestamp: "2026-05-17T09:00:00"
                }
            ];
        }

        const topNotifications =
            getTopNotifications(notifications, 10);

        res.json({
            total: topNotifications.length,
            data: topNotifications
        });

    } catch (error) {

        console.log(error.message);

        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});

module.exports = router;