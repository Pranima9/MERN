import React, { useState } from 'react';
import { 
  Sliders, 
  ShieldCheck, 
  Key, 
  Bell, 
  Globe, 
  Check, 
  Copy, 
  Save,
  Lock,
  Mail
} from 'lucide-react';
import './SettingsTab.css';

const SettingsTab = () => {
  const [apiKey, setApiKey] = useState('pk_live_9948274a108849bca00192');
  const [copied, setCopied] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);
  const [ssoEnforced, setSsoEnforced] = useState(false);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="settings-container card">
      <div className="settings-header">
        <div>
          <h3 className="settings-title">Dashboard & Organization Settings</h3>
          <p className="settings-subtitle">Manage security policies, API integrations, and notification preferences</p>
        </div>
        <button className="btn btn-primary" onClick={handleSave}>
          <Save size={16} /> {savedSuccess ? 'Saved Successfully!' : 'Save Settings'}
        </button>
      </div>

      <div className="settings-grid">
        {/* Section 1: Security & Auth Policy */}
        <div className="settings-card card">
          <div className="card-heading">
            <ShieldCheck size={20} className="card-icon" />
            <div>
              <h4>Security & Access Controls</h4>
              <p>Authentication requirements for team members</p>
            </div>
          </div>

          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-label">Enforce Two-Factor Authentication (2FA)</span>
              <span className="setting-desc">Require all admins and members to enable 2FA authentication app</span>
            </div>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={twoFactor} 
                onChange={() => setTwoFactor(!twoFactor)} 
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-label">SAML / OAuth Single Sign-On (SSO)</span>
              <span className="setting-desc">Allow user login via Okta, Google Workspace, or Azure AD</span>
            </div>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={ssoEnforced} 
                onChange={() => setSsoEnforced(!ssoEnforced)} 
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        {/* Section 2: API Keys */}
        <div className="settings-card card">
          <div className="card-heading">
            <Key size={20} className="card-icon" />
            <div>
              <h4>API Key & Developer Access</h4>
              <p>Use this key for REST API & GraphQL integrations</p>
            </div>
          </div>

          <div className="api-key-box">
            <input 
              type="text" 
              readOnly 
              value={apiKey} 
              className="api-key-input"
            />
            <button className="btn btn-secondary copy-btn" onClick={handleCopy}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>

        {/* Section 3: Notification Rules */}
        <div className="settings-card card full-width-settings">
          <div className="card-heading">
            <Bell size={20} className="card-icon" />
            <div>
              <h4>System Notification Triggers</h4>
              <p>Configure automated email digests and anomaly alerts</p>
            </div>
          </div>

          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-label">Instant Email Alerts on Failed Logins</span>
              <span className="setting-desc">Receive immediate notifications when suspicious IP login attempts occur</span>
            </div>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={emailAlerts} 
                onChange={() => setEmailAlerts(!emailAlerts)} 
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsTab;
