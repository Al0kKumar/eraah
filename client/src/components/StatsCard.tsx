interface StatsCardProps {
    title: string;
    value: number | string;
    icon?: React.ReactNode;
  }
  
  const StatsCard = ({ title, value, icon }: StatsCardProps) => {
    return (
      <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4 w-full">
        <div className="text-blue-600 text-3xl">{icon}</div>
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{title}</h4>
          <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
        </div>
      </div>
    );
  };
  
  export default StatsCard;
  