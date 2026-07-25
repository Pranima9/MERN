import React from 'react';
import { 
  X, 
  Mail, 
  MapPin, 
  Calendar, 
  FolderGit2, 
  Award, 
  Clock, 
  Edit3, 
  Trash2, 
  Activity, 
  ShieldAlert,
  Send
} from 'lucide-react';
import './UserProfileDrawer.css';

const UserProfileDrawer = ({ user, onClose, onEdit, onDelete, onToggleStatus }) => {
  if (!user) return null;

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer-panel card" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <span className="drawer-title">Member Profile</span>
          <button className="drawer-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="drawer-body">
          {/* User Cover Banner & Avatar */}
          <div className="user-profile-banner">
            <div className="banner-bg"></div>
            <div className="profile-avatar-container">
              <img src={user.avatar} alt={user.name} className="profile-large-avatar" />
              <span className={`status-indicator ${user.status.toLowerCase()}`}></span>
            </div>
          </div>

          <div className="profile-main-details">
            <h2 className="profile-user-name">{user.name}</h2>
            <div className="profile-user-role">{user.role} • <span className="highlight-dept">{user.department}</span></div>
            <div className="profile-user-location">
              <MapPin size={14} /> {user.location}
            </div>

            {/* Quick Badges Bar */}
            <div className="profile-badges-row">
              <span className={`badge ${user.status === 'Active' ? 'badge-active' : user.status === 'Pending' ? 'badge-pending' : 'badge-inactive'}`}>
                <span className="badge-dot"></span> {user.status}
              </span>
              <span className="badge-meta">
                <Calendar size={12} /> Joined {user.joinedDate}
              </span>
              <span className="badge-meta">
                <Clock size={12} /> Active {user.lastActive}
              </span>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="profile-stats-grid">
            <div className="profile-stat-box">
              <FolderGit2 size={18} className="stat-box-icon" />
              <div className="stat-box-num">{user.projects}</div>
              <div className="stat-box-label">Projects</div>
            </div>
            <div className="profile-stat-box">
              <Award size={18} className="stat-box-icon accent" />
              <div className="stat-box-num">{user.activityScore}%</div>
              <div className="stat-box-label">Activity Score</div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="drawer-section">
            <h4 className="section-title">About</h4>
            <p className="bio-text">{user.bio || "No biography provided."}</p>
          </div>

          {/* Contact Details */}
          <div className="drawer-section">
            <h4 className="section-title">Contact & Security</h4>
            <div className="info-list">
              <div className="info-item">
                <Mail size={16} className="info-icon" />
                <div className="info-content">
                  <span className="info-label">Email Address</span>
                  <span className="info-val">{user.email}</span>
                </div>
                <a href={`mailto:${user.email}`} className="btn-icon action-btn-subtle" title="Send Email">
                  <Send size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Activity Logs for this user */}
          <div className="drawer-section">
            <h4 className="section-title"><Activity size={16} /> Recent Actions</h4>
            <div className="mini-activity-timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-action">Logged into Dashboard</span>
                  <span className="timeline-time">{user.lastActive}</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-action">Updated department project files</span>
                  <span className="timeline-time">2 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="drawer-footer">
          <button 
            className="btn btn-secondary flex-1" 
            onClick={() => onToggleStatus(user.id)}
          >
            {user.status === 'Active' ? 'Deactivate' : 'Activate'}
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => { onClose(); onEdit(user); }}
          >
            <Edit3 size={16} /> Edit
          </button>
          <button 
            className="btn btn-danger"
            onClick={() => { onClose(); onDelete(user.id); }}
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDrawer;
