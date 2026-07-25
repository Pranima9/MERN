import React from 'react';
import { 
  LayoutDashboard,
  Users,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ currentTab, setCurrentTab, isCollapsed, setIsCollapsed, theme, toggleTheme }) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard, badge: null },
    { id: 'users', label: 'User Directory', icon: Users, badge: null }
  ];

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon" aria-hidden>
            <Sparkles size={18} />
          </div>
        </div>
        <button 
          className="collapse-btn" 
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <div className="sidebar-nav-container">
        <div className="nav-section-label">{!isCollapsed && "MAIN MENU"}</div>
        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setCurrentTab(item.id)}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon size={20} className="nav-icon" />
                {!isCollapsed && <span className="nav-label">{item.label}</span>}
                {!isCollapsed && item.badge && (
                  <span className={`nav-badge ${item.badge === 'Live' ? 'badge-live' : ''}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="sidebar-footer">
        <button 
          className="theme-toggle-btn" 
          onClick={toggleTheme}
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          {!isCollapsed && <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>}
        </button>

        {/* simplified: removed admin card and site name for a minimal sidebar */}
      </div>
    </aside>
  );
};

export default Sidebar;
