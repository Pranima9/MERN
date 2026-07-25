import React, { useState, useEffect } from 'react';
import { X, User, Mail, Shield, Building, MapPin } from 'lucide-react';
import './UserModal.css';

const UserModal = ({ isOpen, onClose, onSave, editingUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Frontend Dev',
    department: 'Engineering',
    status: 'Active',
    location: 'San Francisco, CA',
    bio: '',
    avatar: ''
  });

  useEffect(() => {
    if (editingUser) {
      setFormData({
        name: editingUser.name || '',
        email: editingUser.email || '',
        role: editingUser.role || 'Frontend Dev',
        department: editingUser.department || 'Engineering',
        status: editingUser.status || 'Active',
        location: editingUser.location || 'San Francisco, CA',
        bio: editingUser.bio || '',
        avatar: editingUser.avatar || ''
      });
    } else {
      setFormData({
        name: '',
        email: '',
        role: 'Frontend Dev',
        department: 'Engineering',
        status: 'Active',
        location: 'San Francisco, CA',
        bio: 'Core contributor and team member.',
        avatar: ''
      });
    }
  }, [editingUser, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    onSave({
      ...(editingUser ? { id: editingUser.id, joinedDate: editingUser.joinedDate } : {}),
      ...formData,
      projects: editingUser ? editingUser.projects : 1,
      activityScore: editingUser ? editingUser.activityScore : 85,
      lastActive: editingUser ? editingUser.lastActive : 'Just now'
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card card">
        <div className="modal-header">
          <h3>{editingUser ? 'Edit user' : 'New user'}</h3>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="avatar-selection-section">
            <label className="input-label">Avatar URL (optional)</label>
            <input
              type="text"
              placeholder="https://..."
              value={formData.avatar}
              onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
              className="modal-input"
            />
          </div>

          <div className="form-grid">
            <div className="input-group">
              <label className="input-label"><User size={14} /> Full Name</label>
              <input 
                type="text" 
                required 
                placeholder="e.g. Sarah Connor" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="modal-input"
              />
            </div>

            <div className="input-group">
              <label className="input-label"><Mail size={14} /> Email Address</label>
              <input 
                type="email" 
                required 
                placeholder="e.g. sarah@company.com" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="modal-input"
              />
            </div>

            <div className="input-group">
              <label className="input-label"><Shield size={14} /> Job Title / Role</label>
              <input 
                type="text" 
                required 
                placeholder="e.g. Product Manager" 
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="modal-input"
              />
            </div>

            <div className="input-group">
              <label className="input-label"><Building size={14} /> Department</label>
              <select 
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="modal-input modal-select"
              >
                <option value="Engineering">Engineering</option>
                <option value="Product">Product</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Analytics">Analytics</option>
                <option value="Security">Security</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">Account Status</label>
              <select 
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="modal-input modal-select"
              >
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="input-group">
              <label className="input-label"><MapPin size={14} /> Location</label>
              <input 
                type="text" 
                placeholder="e.g. New York, NY" 
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="modal-input"
              />
            </div>
          </div>

          <div className="input-group full-width">
            <label className="input-label">Short Biography</label>
            <textarea 
              rows="3" 
              placeholder="Brief description of responsibilities..."
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="modal-input modal-textarea"
            ></textarea>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              {editingUser ? 'Save' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
