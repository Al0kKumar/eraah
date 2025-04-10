import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../components/Table";
import DashboardStats from "../components/DashboardStats";
import { BarChartStudents } from "../components/BarCharts";
import { PieChartStudents } from "../components/PieChart";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const columns = ["name", "age", "Course", "active"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:5000/api/students", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(res.data);
      } catch (error) {
        console.error("Failed to fetch student data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Student Dashboard</h2>

      <div className="mb-10">
        <Table columns={columns} data={data} />
      </div>
      
      <div className="mt-15">
      <DashboardStats />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-15">
        <BarChartStudents />
        <PieChartStudents />
      </div>
    </div>
  );
};

export default Dashboard;
