import "./DataPost.css";
import announce from "./promotion2.png";
export default function DataPost() {
  return (
    <div className="post-section">
      <h3 className="announce">
        <img className="announce-img" src={announce} alt="" /> Announcement
      </h3>
      <p className="announce-message">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa
        unde magnam veritatis laudantium, odio quae facilis incidunt laborum
        sed, illo omnis? Ut, possimus! Doloremque sit aliquam harum adipisci
        aut?
      </p>
    </div>
  );
}
