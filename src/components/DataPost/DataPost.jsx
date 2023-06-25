import "./DataPost.css";
import announce from "./promotion2.png";
import { useState, useEffect } from "react";

export default function DataPost() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // fetching the data
    fetch("http://localhost:3005/api/post/latest")
      .then((response) => response.json())
      .then((data) => {
        // const post = data[0].body;
        setMessage(data);
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
