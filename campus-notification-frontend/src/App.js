import { useEffect, useState } from "react";
import NotificationCard from "./components/NotificationCard";

function App() {

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {

        fetch("http://localhost:5000/api/notifications")
            .then(res => res.json())
            .then(data => {
                setNotifications(data.data); // backend sends { total, data }
            })
            .catch(err => console.log("Error fetching data:", err));

    }, []);

    return (
        <div style={{ padding: "20px" }}>

            <h1>Campus Notifications</h1>

            {notifications.length === 0 ? (
                <p>Loading notifications...</p>
            ) : (
                notifications.map((item) => (
                    <NotificationCard key={item.ID} item={item} />
                ))
            )}

        </div>
    );
}

export default App;