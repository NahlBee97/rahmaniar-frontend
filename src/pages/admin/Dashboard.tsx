import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// --- Icons ---

const ArticleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const PersonAddIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="8.5" cy="7" r="4"></circle>
    <line x1="20" y1="8" x2="20" y2="14"></line>
    <line x1="23" y1="11" x2="17" y2="11"></line>
  </svg>
);

const MonitoringIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
  </svg>
);

const SupportAgentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const ArrowUpwardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

const ArrowDownwardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
);

const HorizontalRuleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

// --- Sub-components ---

interface StatCardProps {
  title: string;
  icon: React.ReactNode;
  value: string;
  trend: string;
  trendDirection: "up" | "down" | "neutral";
}

const StatCard = ({
  title,
  icon,
  value,
  trend,
  trendDirection,
}: StatCardProps) => {
  let trendColor = "text-gray-400";
  let TrendIcon = HorizontalRuleIcon;

  if (trendDirection === "up") {
    trendColor = "text-green-400";
    TrendIcon = ArrowUpwardIcon;
  } else if (trendDirection === "down") {
    trendColor = "text-red-400";
    TrendIcon = ArrowDownwardIcon;
  }

  return (
    <div className="bg-[#1b2327] rounded-xl border border-[#3b4c54]/50 p-6 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-white/80 font-medium">{title}</h3>
        <div className="text-blue-400">{icon}</div>
      </div>
      <p className="text-4xl font-bold text-white mt-4">{value}</p>
      <p className={`text-sm ${trendColor} flex items-center gap-1 mt-1`}>
        <span className="flex items-center justify-center w-4 h-4">
          <TrendIcon />
        </span>
        {trend}
      </p>
    </div>
  );
};

// --- Mock Data ---

const trafficData = [
  { name: "Mon", uv: 4000 },
  { name: "Tue", uv: 3000 },
  { name: "Wed", uv: 2000 },
  { name: "Thu", uv: 2780 },
  { name: "Fri", uv: 1890 },
  { name: "Sat", uv: 2390 },
  { name: "Sun", uv: 3490 },
];

// --- Custom Recharts Tooltip ---
// eslint-disable-next-line
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1b2327] border border-[#3b4c54] p-3 rounded-lg shadow-lg">
        <p className="text-white font-medium mb-1">{label}</p>
        <p className="text-[#4cf676] text-sm">
          Traffic: {payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

// --- Main Component ---

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState("Weekly");

  return (
      <main className="flex-1 flex flex-col">
        <div className="grow p-6 lg:p-8 max-w-[1600px] mx-auto w-full">
          {/* Header */}
          <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
            <h1 className="text-blue-400 text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
              Dashboard Overview
            </h1>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <StatCard
              title="Total Posts"
              icon={<ArticleIcon />}
              value="1,254"
              trend="12% vs last month"
              trendDirection="up"
            />
            <StatCard
              title="New Users"
              icon={<PersonAddIcon />}
              value="89"
              trend="5.2% vs last week"
              trendDirection="up"
            />
            <StatCard
              title="Traffic (24h)"
              icon={<MonitoringIcon />}
              value="15,782"
              trend="-3% vs yesterday"
              trendDirection="down"
            />
            <StatCard
              title="Open Tickets"
              icon={<SupportAgentIcon />}
              value="16"
              trend="4 new today"
              trendDirection="neutral"
            />
          </div>

          {/* Chart Section */}
          <div className="mt-6 bg-[#1b2327] rounded-xl border border-[#3b4c54]/50 p-6 shadow-lg">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <h3 className="text-xl font-bold text-blue-400">
                Website Traffic Overview
              </h3>
              <div className="flex items-center gap-2 text-sm bg-[#101618] p-1 rounded-lg">
                {["Weekly", "Monthly", "Yearly"].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      timeRange === range
                        ? "bg-[#4cf676]/20 text-[#4cf676] font-medium"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={trafficData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="colorTraffic"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#4cf676" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#4cf676" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#3b4c54"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="name"
                    stroke="#9cb0ba"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    dy={10}
                  />
                  <YAxis
                    stroke="#9cb0ba"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    dx={-10}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#4cf676"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorTraffic)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
  );
};

export default Dashboard;
