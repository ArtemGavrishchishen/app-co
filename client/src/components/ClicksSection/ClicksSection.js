import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import styles from "./ClicksSection.module.css";

const ClicksSection = ({ data }) => {
  console.log("data", data);
  return (
    <section className={styles.click}>
      <LineChart
        width={1000}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="clicks" stroke="#82ca9d" />
      </LineChart>
    </section>
  );
};

export default ClicksSection;
