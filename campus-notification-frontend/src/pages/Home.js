import { useEffect, useState } from "react";
import axios from "axios";

function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {

            const res = await axios.get(
                "http://localhost:5000/notifications"
            );

            setData(res.data.data);

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Campus Notifications</h1>

            {data.map((item) => (
                <div key={item.ID} style={{
                    border: "1px solid black",
                    margin: "10px",
                    padding: "10px"
                }}>
                    <h3>{item.Type}</h3>
                    <p>{item.Message}</p>
                    <small>{item.Timestamp}</small>
                </div>
            ))}
        </div>
    );
}

export default Home;