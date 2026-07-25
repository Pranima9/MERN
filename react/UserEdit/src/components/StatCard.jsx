import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import './StatCard.css';

const StatCard = ({ title, value, change, isPositive, icon: Icon, color, subtitle }) => {
  return (
    <div className="stat-card card">
      <div className="stat-card-header">
        <span className="stat-title">{title}</span>
        <div className="stat-icon-badge" style={{ backgroundColor: `${color}18`, color: color }}>
          <Icon size={20} />
        </div>
      </div>
      <div className="stat-value-container">
        <div className="stat-value">{value}</div>
        {change && (
          <div className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
            {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            <span>{change}</span>
          </div>
        )}
      </div>
      {subtitle && <div className="stat-subtitle">{subtitle}</div>}
    </div>
  );
};

export default StatCard;
