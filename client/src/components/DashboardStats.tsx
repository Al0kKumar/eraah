import { useEffect, useState } from "react";
import axios from "axios";
import StatsCard from "./StatsCard";
import { Users, Gauge } from "lucide-react";

const DashboardStats = () => {
  const [total, setTotal] = useState(0);
  const [averageAge, setAverageAge] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const totalRes = await axios.get("http://localhost:5000/api/data/count");
        const avgRes = await axios.get("http://localhost:5000/api/data/avg");
        setTotal(totalRes.data.total);
        setAverageAge(avgRes.data.averageAge);
      } catch (err) {
        console.error("Error fetching stats:", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      <StatsCard title="Total Students" value={total} icon={<Users />} />
      <StatsCard title="Average Age" value={`${averageAge} yrs`} icon={<Gauge />} />
    </div>
  );
};

export default DashboardStats;
