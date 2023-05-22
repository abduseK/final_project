import "./admin-card.css";
import { FiEye } from "react-icons/fi";
export default function AdminCard(props) {
  return (
    <div>
      <div className="Acard-grid">
        <div className="Acard">
          <div className="Acard--items">
            <p>{props.num}</p>
            <p className="Acard--title">{props.requester}</p>
            {/* <FiEye className="card-icon" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
