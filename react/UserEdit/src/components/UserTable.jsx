import React, { useState, useMemo } from 'react';
import { 
  ArrowUpDown, 
  MoreVertical, 
  Eye, 
  Edit3, 
  Trash2, 
  CheckCircle, 
  XCircle,
  Filter,
  UserCheck,
  Building2,
  ChevronLeft,
  ChevronRight,
  Shield
} from 'lucide-react';
import './UserTable.css';

const UserTable = ({ 
  users, 
  searchTerm, 
  onViewUser, 
  onEditUser, 
  onDeleteUser, 
  onToggleStatus 
}) => {
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortField, setSortField] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [activeMenuId, setActiveMenuId] = useState(null);

  const itemsPerPage = 6;

  // Extract unique departments
  const departments = useMemo(() => {
    const deps = new Set(users.map(u => u.department));
    return ['All', ...Array.from(deps)];
  }, [users]);

  // Filtering & Sorting Logic
  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      const matchesSearch = 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.department.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDepartment = departmentFilter === 'All' || user.department === departmentFilter;
      const matchesStatus = statusFilter === 'All' || user.status === statusFilter;

      return matchesSearch && matchesDepartment && matchesStatus;
    }).sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];

      if (typeof valA === 'string') {
        valA = valA.toLowerCase();
        valB = valB.toLowerCase();
      }

      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [users, searchTerm, departmentFilter, statusFilter, sortField, sortOrder]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage) || 1;
  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredUsers.slice(start, start + itemsPerPage);
  }, [filteredUsers, currentPage]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUserIds(paginatedUsers.map(u => u.id));
    } else {
      setSelectedUserIds([]);
    }
  };

  const handleSelectOne = (id) => {
    setSelectedUserIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Active': return 'badge-active';
      case 'Pending': return 'badge-pending';
      default: return 'badge-inactive';
    }
  };

  return (
    <div className="user-table-container card">
      {/* Controls Bar */}
      <div className="table-controls-bar">
        <div className="filter-group">
          <div className="filter-item">
            <Building2 size={16} className="filter-icon" />
            <select 
              value={departmentFilter} 
              onChange={(e) => { setDepartmentFilter(e.target.value); setCurrentPage(1); }}
              className="filter-select"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>Dept: {dept}</option>
              ))}
            </select>
          </div>

          <div className="filter-item">
            <Filter size={16} className="filter-icon" />
            <select 
              value={statusFilter} 
              onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
              className="filter-select"
            >
              <option value="All">Status: All</option>
              <option value="Active">Status: Active</option>
              <option value="Pending">Status: Pending</option>
              <option value="Inactive">Status: Inactive</option>
            </select>
          </div>
        </div>

          <div className="table-summary-info">
          Showing <span className="highlight-count">{filteredUsers.length}</span> users
          {selectedUserIds.length > 0 && (
            <span className="selected-tag">{selectedUserIds.length} selected</span>
          )}
        </div>
      </div>

      {/* Main Table */}
      <div className="table-responsive">
        <table className="user-table">
          <thead>
            <tr>
              <th className="th-checkbox">
                <input 
                  type="checkbox" 
                  onChange={handleSelectAll} 
                  checked={paginatedUsers.length > 0 && selectedUserIds.length === paginatedUsers.length}
                />
              </th>
              <th onClick={() => handleSort('name')} className="sortable-th">
                User Details <ArrowUpDown size={13} className="sort-icon" />
              </th>
              <th onClick={() => handleSort('role')} className="sortable-th">
                Role & Department <ArrowUpDown size={13} className="sort-icon" />
              </th>
              <th onClick={() => handleSort('status')} className="sortable-th">
                Status <ArrowUpDown size={13} className="sort-icon" />
              </th>
              <th onClick={() => handleSort('activityScore')} className="sortable-th">
                Activity Score <ArrowUpDown size={13} className="sort-icon" />
              </th>
              <th onClick={() => handleSort('joinedDate')} className="sortable-th">
                Joined <ArrowUpDown size={13} className="sort-icon" />
              </th>
              <th className="th-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.length === 0 ? (
              <tr>
                <td colSpan="7" className="empty-table-row">
                  No users found matching your criteria.
                </td>
              </tr>
            ) : (
              paginatedUsers.map((user) => (
                <tr key={user.id} className={selectedUserIds.includes(user.id) ? 'row-selected' : ''}>
                  <td className="td-checkbox">
                    <input 
                      type="checkbox" 
                      checked={selectedUserIds.includes(user.id)}
                      onChange={() => handleSelectOne(user.id)}
                    />
                  </td>
                  <td className="td-user">
                    <div className="user-info-cell" onClick={() => onViewUser(user)}>
                      <img src={user.avatar} alt={user.name} className="table-user-avatar" />
                      <div className="user-text-info">
                        <span className="user-name-text">{user.name}</span>
                        <span className="user-email-text">{user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="role-cell">
                      <span className="role-title">{user.role}</span>
                      <span className="dept-badge">{user.department}</span>
                    </div>
                  </td>
                  <td>
                    <span 
                      className={`badge ${getStatusBadgeClass(user.status)} cursor-pointer`}
                      onClick={() => onToggleStatus(user.id)}
                      title="Click to toggle status"
                    >
                      <span className="badge-dot"></span>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <div className="score-cell">
                      <div className="score-progress-bar">
                        <div 
                          className="score-fill" 
                          style={{ 
                            width: `${user.activityScore}%`,
                            background: user.activityScore > 90 ? 'var(--success)' : user.activityScore > 70 ? 'var(--accent-primary)' : 'var(--warning)'
                          }}
                        ></div>
                      </div>
                      <span className="score-number">{user.activityScore}%</span>
                    </div>
                  </td>
                  <td>
                    <span className="date-text">{user.joinedDate}</span>
                  </td>
                  <td className="td-actions">
                    <div className="action-buttons-group">
                      <button 
                        className="btn-icon action-btn-subtle" 
                        onClick={() => onViewUser(user)}
                        title="View Profile"
                      >
                        <Eye size={16} />
                      </button>
                      <button 
                        className="btn-icon action-btn-subtle" 
                        onClick={() => onEditUser(user)}
                        title="Edit User"
                      >
                        <Edit3 size={16} />
                      </button>
                      <button 
                        className="btn-icon action-btn-danger" 
                        onClick={() => onDeleteUser(user.id)}
                        title="Delete User"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="table-pagination-footer">
        <span className="pagination-text">
          Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
        </span>
        <div className="pagination-controls">
          <button 
            className="btn btn-secondary pagination-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          >
            <ChevronLeft size={16} /> Previous
          </button>
          <button 
            className="btn btn-secondary pagination-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
