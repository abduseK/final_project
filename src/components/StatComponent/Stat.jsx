import "./Stat.css";
import StatPieChart from "../Chart/statPieChart";
import { useEffect, useState } from "react";

export default function Hero() {
  const [birth, setBirth] = useState();
  const [death, setDeath] = useState();
  const [wedding, setWedding] = useState();

  const [pendings, setPendings] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/birth/pending/count")
      .then((response) => response.json())
      .then((data) => {
        const data1 = data.birth;
        const data2 = data.wedding;
        const data3 = data.death;
        const total = data1 + data2 + data3;
        setPendings(total);
        setBirth(data1);
        setWedding(data2);
        setDeath(data3);
      });
  }, []);

  return (
    <div className="stat-section">
      <div className="stat-section-items">
        <div className="stat-row">
          <h1 className="stat-nums">{pendings}</h1>
          <p>+</p>
        </div>
        <p className="stat-name">Pending Requests This Week</p>
      </div>
      <div className="stat-section-items">
        <div className="stat-row">
          <h1 className="stat-nums">{birth}</h1>
          <p>+</p>
        </div>
        <p>Pending Birth Certificates</p>
      </div>
      <div className="stat-section-pie">
        <StatPieChart birth={birth} death={death} wedding={wedding} />
      </div>
    </div>
  );
}
