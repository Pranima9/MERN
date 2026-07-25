export const initialUsers = [
  {
    id: "usr-101",
    name: "Elena Rostova",
    email: "elena.rostova@techspark.io",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    role: "Admin",
    department: "Engineering",
    status: "Active",
    joinedDate: "2024-01-15",
    lastActive: "2 mins ago",
    location: "San Francisco, CA",
    projects: 14,
    activityScore: 98,
    bio: "Lead Systems Architect & Core Infrastructure Specialist."
  },
  {
    id: "usr-102",
    name: "Marcus Vance",
    email: "marcus.v@designcraft.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    role: "Product Designer",
    department: "Design",
    status: "Active",
    joinedDate: "2024-02-01",
    lastActive: "15 mins ago",
    location: "Austin, TX",
    projects: 8,
    activityScore: 92,
    bio: "UI/UX lead passionate about micro-interactions and design systems."
  },
  {
    id: "usr-103",
    name: "Aisha Patel",
    email: "aisha.patel@quantumly.ai",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    role: "Data Scientist",
    department: "Analytics",
    status: "Active",
    joinedDate: "2024-02-18",
    lastActive: "1 hour ago",
    location: "London, UK",
    projects: 19,
    activityScore: 95,
    bio: "Machine learning researcher specializing in predictive behavior analytics."
  },
  {
    id: "usr-104",
    name: "David Kim",
    email: "david.k@cloudops.net",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    role: "DevOps Lead",
    department: "Engineering",
    status: "Pending",
    joinedDate: "2024-03-05",
    lastActive: "Yesterday",
    location: "Seattle, WA",
    projects: 6,
    activityScore: 74,
    bio: "Kubernetes enthusiast and CI/CD automation master."
  },
  {
    id: "usr-105",
    name: "Sophia Chen",
    email: "sophia.chen@marketgrowth.co",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    role: "Marketing Mgr",
    department: "Marketing",
    status: "Active",
    joinedDate: "2024-03-20",
    lastActive: "3 hours ago",
    location: "Toronto, CA",
    projects: 11,
    activityScore: 88,
    bio: "Growth strategist driving user acquisition and engagement."
  },
  {
    id: "usr-106",
    name: "Liam O'Connor",
    email: "liam.oc@cybervault.org",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    role: "Security Analyst",
    department: "Security",
    status: "Inactive",
    joinedDate: "2023-11-12",
    lastActive: "5 days ago",
    location: "Dublin, IE",
    projects: 4,
    activityScore: 45,
    bio: "Penetration tester and threat intelligence researcher."
  },
  {
    id: "usr-107",
    name: "Zoe Sterling",
    email: "zoe.sterling@fintechflow.io",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
    role: "Product Manager",
    department: "Product",
    status: "Active",
    joinedDate: "2024-04-02",
    lastActive: "Just now",
    location: "New York, NY",
    projects: 15,
    activityScore: 99,
    bio: "Product strategist focused on scaling SaaS platforms."
  },
  {
    id: "usr-108",
    name: "Carlos Rodriguez",
    email: "carlos.r@devstudio.com",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    role: "Frontend Dev",
    department: "Engineering",
    status: "Active",
    joinedDate: "2024-04-10",
    lastActive: "42 mins ago",
    location: "Barcelona, ES",
    projects: 9,
    activityScore: 86,
    bio: "React & Animation wizard passionate about clean code."
  }
];

export const initialNotifications = [
  {
    id: 1,
    title: "New Security Alert",
    message: "Multiple failed login attempts detected from IP 192.168.1.45",
    time: "10m ago",
    unread: true,
    type: "warning"
  },
  {
    id: 2,
    title: "User Account Upgrade",
    message: "Elena Rostova upgraded plan to Enterprise Tier.",
    time: "1h ago",
    unread: true,
    type: "success"
  },
  {
    id: 3,
    title: "System Maintenance",
    message: "Scheduled database indexing tonight at 02:00 UTC.",
    time: "3h ago",
    unread: false,
    type: "info"
  },
  {
    id: 4,
    title: "New Team Member Joined",
    message: "Carlos Rodriguez joined Engineering department.",
    time: "1d ago",
    unread: false,
    type: "info"
  }
];

export const mockAnalyticsData = {
  userGrowth: [
    { month: "Jan", totalUsers: 1200, activeUsers: 840, premium: 320 },
    { month: "Feb", totalUsers: 1450, activeUsers: 1020, premium: 410 },
    { month: "Mar", totalUsers: 1890, activeUsers: 1350, premium: 580 },
    { month: "Apr", totalUsers: 2400, activeUsers: 1780, premium: 790 },
    { month: "May", totalUsers: 3100, activeUsers: 2240, premium: 1050 },
    { month: "Jun", totalUsers: 3850, activeUsers: 2890, premium: 1420 },
    { month: "Jul", totalUsers: 4620, activeUsers: 3510, premium: 1850 }
  ],
  roleDistribution: [
    { name: "Engineering", count: 42, color: "#6366f1" },
    { name: "Product", count: 24, color: "#8b5cf6" },
    { name: "Design", count: 18, color: "#ec4899" },
    { name: "Marketing", count: 15, color: "#10b981" },
    { name: "Security", count: 9, color: "#f59e0b" }
  ],
  weeklyActivity: [
    { day: "Mon", sessions: 4200, newSignups: 120 },
    { day: "Tue", sessions: 5100, newSignups: 145 },
    { day: "Wed", sessions: 5800, newSignups: 190 },
    { day: "Thu", sessions: 6300, newSignups: 210 },
    { day: "Fri", sessions: 5400, newSignups: 165 },
    { day: "Sat", sessions: 3200, newSignups: 85 },
    { day: "Sun", sessions: 2900, newSignups: 70 }
  ]
};

export const mockActivityLogs = [
  {
    id: "log-1",
    user: "Elena Rostova",
    action: "Updated system security permissions for DevOps group",
    timestamp: "5 mins ago",
    ip: "192.168.1.12",
    badge: "Security",
    badgeType: "primary"
  },
  {
    id: "log-2",
    user: "Marcus Vance",
    action: "Uploaded new Figma brand identity system assets",
    timestamp: "32 mins ago",
    ip: "10.0.4.88",
    badge: "Design",
    badgeType: "accent"
  },
  {
    id: "log-3",
    user: "David Kim",
    action: "Deployed v2.4.0 API server build to production",
    timestamp: "2 hours ago",
    ip: "172.16.0.4",
    badge: "Deployment",
    badgeType: "success"
  },
  {
    id: "log-4",
    user: "Aisha Patel",
    action: "Generated weekly data retention and privacy audit report",
    timestamp: "4 hours ago",
    ip: "192.168.2.99",
    badge: "Analytics",
    badgeType: "warning"
  },
  {
    id: "log-5",
    user: "Zoe Sterling",
    action: "Created new user onboarding workflow template",
    timestamp: "6 hours ago",
    ip: "10.0.1.15",
    badge: "Product",
    badgeType: "info"
  }
];
