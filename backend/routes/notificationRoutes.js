const express = require("express");
const router = express.Router();

const { getTopNotifications } = require("../services/priorityService");

router.get("/", async (req, res) => {
    try {
        let notifications = [];

        try {
            // External API call
            const response = await fetch(
                "http://4.224.186.213/evaluation-service/notifications",
                {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer RyZBcy"
                    }
                }
            );

            if (!response.ok) {
                throw new Error("Failed to fetch external API");
            }

            notifications = await response.json();

        } catch (apiError) {
            console.log("External API failed. Using fallback data.");

            // Fallback data
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

        // Sort / filter logic
        const topNotifications = getTopNotifications(notifications, 10);

        return res.json({
            total: topNotifications.length,
            data: topNotifications
        });

    } catch (error) {
        console.error("Server Error:", error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
});

module.exports = router;