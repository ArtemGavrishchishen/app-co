import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

import styles from "./Statistic.module.css";

const Statistic = ({ data, title }) => {
  console.log("data", data);
  return (
    <section className={styles.statistic}>
      <h2>{title}</h2>

      <LineChart
        width={1175}
        height={275}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid vertical={false} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#3A80BA"
          strokeWidth="4px"
          dot={false}
        />
      </LineChart>
    </section>
  );
};

export default Statistic;
