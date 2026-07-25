import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import UserTable from './components/UserTable';
import UserModal from './components/UserModal';
import UserProfileDrawer from './components/UserProfileDrawer';
import { initialUsers, initialNotifications } from './data/mockUsers';
import { ShieldCheck } from 'lucide-react';
import './App.css';

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [currentTab, setCurrentTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [theme, setTheme] = useState('dark');
  
  // Modals & Drawers
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [drawerUser, setDrawerUser] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // User Actions
  const handleOpenAddModal = () => {
    setEditingUser(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleSaveUser = (userData) => {
    if (editingUser) {
      setUsers(users.map(u => u.id === userData.id ? userData : u));
      showToast(`Successfully updated profile for ${userData.name}`);
    } else {
      const newUser = {
        ...userData,
        id: `usr-${Date.now()}`,
        joinedDate: new Date().toISOString().split('T')[0],
      };
      setUsers([newUser, ...users]);
      showToast(`Created new user account for ${newUser.name}`);
    }
  };

  const handleDeleteUser = (id) => {
    const target = users.find(u => u.id === id);
    if (window.confirm(`Are you sure you want to delete ${target?.name || 'this user'}?`)) {
      setUsers(users.filter(u => u.id !== id));
      if (drawerUser?.id === id) setDrawerUser(null);
      showToast(`User account deleted`);
    }
  };

  const handleToggleStatus = (id) => {
    setUsers(users.map(u => {
      if (u.id === id) {
        const nextStatus = u.status === 'Active' ? 'Inactive' : 'Active';
        showToast(`Changed ${u.name}'s status to ${nextStatus}`);
        return { ...u, status: nextStatus };
      }
      return u;
    }));
  };

  // Stat Calculations
  const totalUsers = users.length;
  const activeCount = users.filter(u => u.status === 'Active').length;
  const pendingCount = users.filter(u => u.status === 'Pending').length;
  const avgScore = Math.round(users.reduce((acc, u) => acc + u.activityScore, 0) / (users.length || 1));

  return (
    <div className="app-container">
      <Sidebar 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <div className="main-content">
        <Header 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onOpenAddModal={handleOpenAddModal}
          notifications={notifications}
          setNotifications={setNotifications}
          activeTab={currentTab}
        />

        <main className="dashboard-viewport">
          {/* Toast Banner */}
          {toastMessage && (
            <div className="toast-notification">
              <span>{toastMessage}</span>
            </div>
          )}

          {/* TAB 1: OVERVIEW */}
          {currentTab === 'overview' && (
            <div className="tab-content">
              <div className="tab-header-banner">
                <div>
                  <h1 className="viewport-title">Welcome</h1>
                  <p className="viewport-subtitle">Quick overview of your users and activity.</p>
                </div>
              </div>

              {/* Metrics removed - simplified view shows only user details */}

              {/* Main Directory Table */}
              <UserTable 
                users={users}
                searchTerm={searchTerm}
                onViewUser={(user) => setDrawerUser(user)}
                onEditUser={handleOpenEditModal}
                onDeleteUser={handleDeleteUser}
                onToggleStatus={handleToggleStatus}
              />

              {/* Charts removed for a simpler editable view */}
            </div>
          )}

          {/* TAB 2: USERS DIRECTORY */}
          {currentTab === 'users' && (
            <div className="tab-content">
              <div className="tab-header-banner">
                <div>
                  <h1 className="viewport-title">User Directory</h1>
                  <p className="viewport-subtitle">Manage member profiles, department roles, and account permissions.</p>
                </div>
              </div>

              <UserTable 
                users={users}
                searchTerm={searchTerm}
                onViewUser={(user) => setDrawerUser(user)}
                onEditUser={handleOpenEditModal}
                onDeleteUser={handleDeleteUser}
                onToggleStatus={handleToggleStatus}
              />
            </div>
          )}

          {/* Other tabs removed to keep view focused on user details */}
        </main>

        {/* User Modal */}
        <UserModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveUser}
          editingUser={editingUser}
        />

        {/* Profile Drawer */}
        <UserProfileDrawer 
          user={drawerUser}
          onClose={() => setDrawerUser(null)}
          onEdit={handleOpenEditModal}
          onDelete={handleDeleteUser}
          onToggleStatus={handleToggleStatus}
        />
      </div>
    </div>
  );
}

export default App;
