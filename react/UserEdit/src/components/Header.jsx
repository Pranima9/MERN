import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  UserPlus, 
  Check, 
  Info, 
  AlertTriangle, 
  CheckCircle2, 
  SlidersHorizontal,
  X
} from 'lucide-react';
import './Header.css';

const Header = ({ 
  searchTerm, 
  setSearchTerm, 
  onOpenAddModal, 
  notifications, 
  setNotifications,
  activeTab
}) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'warning': return <AlertTriangle size={16} className="notif-icon warning" />;
      case 'success': return <CheckCircle2 size={16} className="notif-icon success" />;
      default: return <Info size={16} className="notif-icon info" />;
    }
  };

  return (
    <header className="main-header">
      <div className="header-left">
        <div className="search-bar-container">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search users by name, email, department..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm ? (
            <button className="search-clear-btn" onClick={() => setSearchTerm('')}>
              <X size={14} />
            </button>
          ) : null}
        </div>
      </div>

      <div className="header-right">
        <button 
          className="btn btn-primary add-user-header-btn" 
          onClick={onOpenAddModal}
        >
          <UserPlus size={16} />
          <span>Add</span>
        </button>

        <div className="notification-wrapper">
          <button 
            className={`btn-icon header-action-btn ${showNotifications ? 'active' : ''}`}
            onClick={() => setShowNotifications(!showNotifications)}
            title="Notifications"
          >
            <Bell size={20} />
            {unreadCount > 0 && <span className="notif-badge-count">{unreadCount}</span>}
          </button>

          {showNotifications && (
            <div className="notification-dropdown card">
              <div className="notif-header">
                <div className="notif-title">
                  Notifications
                  {unreadCount > 0 && <span className="notif-unread-pill">{unreadCount} new</span>}
                </div>
                {unreadCount > 0 && (
                  <button className="mark-read-btn" onClick={markAllRead}>
                    <Check size={14} /> Mark all read
                  </button>
                )}
              </div>

              <div className="notif-list">
                {notifications.length === 0 ? (
                  <div className="empty-notif">No new notifications</div>
                ) : (
                  notifications.map((notif) => (
                    <div 
                      key={notif.id} 
                      className={`notif-item ${notif.unread ? 'unread' : ''}`}
                    >
                      <div className="notif-icon-wrapper">
                        {getNotificationIcon(notif.type)}
                      </div>
                      <div className="notif-content">
                        <div className="notif-item-title">{notif.title}</div>
                        <div className="notif-item-desc">{notif.message}</div>
                        <div className="notif-item-time">{notif.time}</div>
                      </div>
                      <button 
                        className="notif-close-btn"
                        onClick={() => removeNotification(notif.id)}
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
