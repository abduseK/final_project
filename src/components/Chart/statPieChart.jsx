import AnimatedPage from "../AnimatedPage";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function StatPieChart(props) {
  const data = [
    { name: "ID Card", value: 0 },
    { name: "Birth Certificate", value: props.birth },
    { name: "Death Certificate", value: props.death },
    { name: "Wedding Certificate", value: props.wedding },
    { name: "Newly Registerd Residents", value: 0 },
  ];
  const data02 = [
    { name: "Total Residents", value: 100 },
    { name: "Married", value: 100 },
    { name: "Children", value: 100 },
    { name: "Widow", value: 100 },
    { name: "Divorce", value: 100 },
    { name: "New residents/month", value: 100 },
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
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </AnimatedPage>
  );
}

// import React, { PureComponent } from 'react';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

// const data01 = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/pie-chart-of-two-levels-gor24';

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart width={400} height={400}>
//           <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
//           <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
//         </PieChart>
//       </ResponsiveContainer>
//     );
//   }
// }
