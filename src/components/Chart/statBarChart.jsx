import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function StatBarChart() {
  const data = [
    {
      name: "ID Cards",
      uv: 150,
      pv: 600,
      amt: 2400,
    },
    {
      name: "Birth Cert.",
      uv: 100,
      pv: 350,
      amt: 2210,
    },
    {
      name: "Wedding Cert.",
      uv: 85,
      pv: 200,
      amt: 2290,
    },
    {
      name: "Residential Reg.",
      uv: 180,
      pv: 300,
      amt: 2000,
    },
    {
      name: "Death Cert.",
      uv: 53,
      pv: 400,
      amt: 2181,
    },
  ];
  return (
    <BarChart
      width={800}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
}
