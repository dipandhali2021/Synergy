import { User, LoginCredentials, RegisterData } from '../types/auth';

// Mock user database
const users: User[] = [
  {
    id: '1',
    email: 'normal@example.com',
    name: 'Normal User',
    role: 'NORMAL',
    verified: true,
    approved: true
  },
  {
    id: '2',
    email: 'school@example.com',
    name: 'School Administrator',
    role: 'SCHOOL_ADMIN',
    verified: true,
    approved: true
  },
  {
    id: '3',
    email: 'super@example.com',
    name: 'Super Admin',
    role: 'SUPER_ADMIN',
    verified: true,
    approved: true
  },
  {
    id: '4',
    email: 'policy@example.com',
    name: 'Policy Maker',
    role: 'POLICY_MAKER',
    verified: true,
    approved: true
  },
  {
    id: '5',
    email: 'support@example.com',
    name: 'Support Staff',
    role: 'SUPPORT_STAFF',
    verified: true,
    approved: true
  },
  {
    id: '6',
    email: 'auditor@example.com',
    name: 'Auditor',
    role: 'AUDITOR',
    verified: true,
    approved: true
  }
];

// Mock authentication service
export const mockAuth = {
  login: async (credentials: LoginCredentials): Promise<{ token: string }> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = users.find(u => u.email === credentials.email);
    
    if (!user || credentials.password !== 'password123') {
      throw new Error('Invalid email or password');
    }

    // Create a mock JWT token
    const token = btoa(JSON.stringify(user));
    return { token };
  },

  register: async (data: RegisterData): Promise<{ token: string }> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check if email already exists
    if (users.some(u => u.email === data.email)) {
      throw new Error('Email already registered');
    }

    // Create new user
    const newUser: User = {
      id: String(users.length + 1),
      email: data.email,
      name: data.name,
      role: data.role,
      verified: false,
      approved: data.role === 'NORMAL'
    };

    users.push(newUser);

    // Create a mock JWT token
    const token = btoa(JSON.stringify(newUser));
    return { token };
  }
};