import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import { mockAnalyticsData } from '../data/mockUsers';
import './AnalyticsCharts.css';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
    return (
      <div className="custom-chart-tooltip card">
        <p className="tooltip-label">{label}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} className="tooltip-item" style={{ color: entry.color }}>
            {entry.name}: <strong>{entry.value.toLocaleString()}</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const AnalyticsCharts = () => {
  return (
    <div className="analytics-charts-grid">
      {/* Chart 1: User Growth Trend */}
      <div className="chart-card card">
        <div className="chart-header">
          <div>
            <h3 className="chart-title">User Growth & Active Trend</h3>
            <p className="chart-subtitle">Monthly active users vs total registrations</p>
          </div>
          <span className="chart-badge">+34.8% YTD</span>
        </div>
        <div className="chart-body">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={mockAnalyticsData.userGrowth} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" stroke="#64748b" tick={{ fontSize: 12 }} />
              <YAxis stroke="#64748b" tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="totalUsers" name="Total Users" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorTotal)" />
              <Area type="monotone" dataKey="activeUsers" name="Active Users" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorActive)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 2: Role / Department Breakdown (Donut) */}
      <div className="chart-card card">
        <div className="chart-header">
          <div>
            <h3 className="chart-title">Department Distribution</h3>
            <p className="chart-subtitle">Team members by functional area</p>
          </div>
        </div>
        <div className="chart-body pie-chart-container">
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={mockAnalyticsData.roleDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={4}
                dataKey="count"
              >
                {mockAnalyticsData.roleDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="pie-legend">
            {mockAnalyticsData.roleDistribution.map((dept) => (
              <div key={dept.name} className="legend-item">
                <span className="legend-dot" style={{ backgroundColor: dept.color }}></span>
                <span className="legend-name">{dept.name}</span>
                <span className="legend-val">{dept.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chart 3: Weekly Active Sessions Bar Chart */}
      <div className="chart-card card full-width-chart">
        <div className="chart-header">
          <div>
            <h3 className="chart-title">Weekly Sessions & New Signups</h3>
            <p className="chart-subtitle">Engagement activity breakdown by day of week</p>
          </div>
        </div>
        <div className="chart-body">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={mockAnalyticsData.weeklyActivity} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="day" stroke="#64748b" tick={{ fontSize: 12 }} />
              <YAxis stroke="#64748b" tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ paddingTop: '10px' }} />
              <Bar dataKey="sessions" name="Daily Sessions" fill="#6366f1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="newSignups" name="New Signups" fill="#ec4899" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCharts;
