import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import AnimatedPage from "../AnimatedPage";

export default function StatPieChart() {
  const data = [
    { name: "ID Card", value: 150 },
    { name: "Birth Certificate", value: 85 },
    { name: "Death Certificate", value: 30 },
    { name: "Wedding Certificate", value: 12 },
    { name: "Newly Registerd Residents", value: 53 },
  ];
  return (
    <AnimatedPage>
      <div>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#00A967"
          />
          <Tooltip />
        </PieChart>
      </div>
    </AnimatedPage>
  );
}
