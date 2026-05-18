# Notification System Design

## Objective
Fetch notification from external API  and return top priority notifications.

## Priority Order
1. Placement
2. Result
3. Event

## Approach
- Fetch notifications using Axios
- Sort notifications by:
  - Priority
  - Latest timestamp
- Return top 10 notifications

## Middleware

Logging middleware logs:
- API route
- Request method
- Timestamp

## Technologies Used
- Node.js
- Express.js
- Axios