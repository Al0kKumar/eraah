import { useEffect, useState } from "react";
import axios from "axios";
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";


const COLORS = ["#34d399", "#f87171"];

export const PieChartStudents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPieStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/students", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        let active = 0;
        let inactive = 0;

        res.data.forEach((student: any) => {
          if (student.active) active++;
          else inactive++;
        });

        setData([
          { name: "Active", value: active },
          { name: "Inactive", value: inactive },
        ] as any);
      } catch (err) {
        console.error("Failed to fetch pie chart data", err);
      }
    };

    fetchPieStats();
  }, []);

  return (
    <div className="w-full h-72 bg-white shadow rounded-lg p-4 mt-6">
      <h3 className="text-lg font-semibold mb-4">Active vs Inactive Students</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {data.map((index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
