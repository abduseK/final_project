import "./Stat.css";
import StatPieChart from "../Chart/statPieChart";
export default function Hero() {
  return (
    <div className="stat-section">
      <div className="stat-section-items">
        <div className="stat-row">
          <h1 className="stat-nums">53</h1>
          <p>+</p>
        </div>
        <p className="stat-name">Residents registered last month</p>
      </div>
      <div className="stat-section-items">
        <div className="stat-row">
          <h1 className="stat-nums">150</h1>
          <p>+</p>
        </div>
        <p>Issued ID Cards and Renewal</p>
      </div>
      <div className="stat-section-pie">
        <StatPieChart />
      </div>
    </div>
  );
}
