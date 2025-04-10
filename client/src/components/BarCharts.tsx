import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export const BarChartStudents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/students", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const courseCount: Record<string, number> = {};
        res.data.forEach((student: any) => {
          const course = student.Course;
          courseCount[course] = (courseCount[course] || 0) + 1;
        });

        const chartData = Object.entries(courseCount).map(([course, count]) => ({
          course,
          count,
        }));

        setData(chartData as any);
      } catch (err) {
        console.error("Failed to fetch bar chart data", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="w-full h-72 bg-white shadow rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Students per Course</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="course" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};