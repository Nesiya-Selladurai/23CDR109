Campus Notification Service

A full-stack web application that displays campus-related notifications such as placements, results, and events in a structured and prioritized format.

 Features
Fetches notifications from backend API
Prioritizes notifications (Placement > Result > Event)
Displays fallback data if API fails
Clean UI using Material UI (MUI)
Fully responsive frontend
REST API integration between frontend and backend
 Tech Stack
Frontend: React.js, Material UI
Backend: Node.js, Express.js
API Communication: Fetch / REST API
Data Handling: JavaScript (sorting & filtering logic)
 Project Structure
campus-notification-service/
│
├── campus-notification-frontend/
│   ├── src/
│   │   ├── components/NotificationCard.js
│   │   ├── pages/Home.js
│   │   ├── App.js
│
├── backend/
│   ├── routes/
│   ├── services/
│   ├── server.js
🔗 API Endpoint
GET /api/notifications

Response:

{
  "total": 3,
  "data": [
    {
      "ID": 1,
      "Type": "Placement",
      "Message": "Amazon Hiring",
      "Timestamp": "2026-05-18T10:00:00"
    }
  ]
}
⚙️ How to Run the Project
1️ Backend
cd backend
npm install
node server.js

Backend runs on:

http://localhost:5000
2️ Frontend
cd campus-notification-frontend
npm install
npm start

Frontend runs on:

http://localhost:3000
📸 Project Screenshot

Add your screenshot here:

![Campus Notification App](./screenshots/app.png)
 Key Logic
Notifications are sorted based on priority:
Placement → 3
Result → 2
Event → 1
If API fails, fallback data is used automaticall


<img width="1911" height="1012" alt="Screenshot 2026-05-18 112330" src="https://github.com/user-attachments/assets/488662db-ddbc-4864-9b61-58426536f735" />
<img width="1907" height="989" alt="Screenshot 2026-05-18 121411" src="https://github.com/user-attachments/assets/e40a2d00-39c2-48fd-823b-b35f5f300975" />
