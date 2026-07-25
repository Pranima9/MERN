import React, { useState } from 'react';
import { Activity, Shield, Terminal, Filter, RefreshCw, Layers } from 'lucide-react';
import { mockActivityLogs } from '../data/mockUsers';
import './ActivityLog.css';

const ActivityLog = () => {
  const [logs, setLogs] = useState(mockActivityLogs);
  const [filterType, setFilterType] = useState('All');

  const filteredLogs = logs.filter(log => filterType === 'All' || log.badge === filterType);

  const getBadgeStyle = (badgeType) => {
    switch(badgeType) {
      case 'primary': return 'badge-primary-pill';
      case 'accent': return 'badge-accent-pill';
      case 'success': return 'badge-success-pill';
      case 'warning': return 'badge-warning-pill';
      default: return 'badge-info-pill';
    }
  };

  const handleRefresh = () => {
    const newLog = {
      id: `log-${Date.now()}`,
      user: "System Daemon",
      action: "Executed automated security vulnerability check",
      timestamp: "Just now",
      ip: "127.0.0.1",
      badge: "Security",
      badgeType: "primary"
    };
    setLogs([newLog, ...logs]);
  };

  return (
    <div className="activity-log-container card">
      <div className="activity-header">
        <div className="activity-title-wrapper">
          <Activity className="activity-main-icon" size={22} />
          <div>
            <h3 className="activity-title">Audit & Activity Feed</h3>
            <p className="activity-subtitle">Real-time system events, administrative changes, and security logs</p>
          </div>
        </div>

        <div className="activity-actions">
          <div className="filter-item">
            <Filter size={14} className="filter-icon" />
            <select 
              value={filterType} 
              onChange={(e) => setFilterType(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Categories</option>
              <option value="Security">Security</option>
              <option value="Design">Design</option>
              <option value="Deployment">Deployment</option>
              <option value="Analytics">Analytics</option>
              <option value="Product">Product</option>
            </select>
          </div>

          <button className="btn btn-secondary btn-icon" onClick={handleRefresh} title="Fetch Latest Logs">
            <RefreshCw size={16} />
          </button>
        </div>
      </div>

      <div className="activity-list">
        {filteredLogs.map((log) => (
          <div key={log.id} className="log-row">
            <div className="log-left">
              <div className="log-user-avatar-placeholder">
                {log.user.charAt(0)}
              </div>
              <div className="log-details">
                <div className="log-user-line">
                  <strong className="log-user-name">{log.user}</strong>
                  <span className={`log-badge ${getBadgeStyle(log.badgeType)}`}>{log.badge}</span>
                </div>
                <p className="log-action-text">{log.action}</p>
              </div>
            </div>

            <div className="log-right">
              <span className="log-ip"><Terminal size={12} /> {log.ip}</span>
              <span className="log-time">{log.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;
