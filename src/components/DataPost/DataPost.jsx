import "./DataPost.css";
import announce from "./promotion2.png";
import axios from "axios";
import { useState, useEffect } from "react";

export default function DataPost() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // fetching the data
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const data = response.data[0];
        setMessage(data.body);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, []);
  return (
    <div className="post-section">
      <h3 className="announce">
        <img className="announce-img" src={announce} alt="" /> Announcement
      </h3>
      <p className="announce-message">{message}</p>
    </div>
  );
}
