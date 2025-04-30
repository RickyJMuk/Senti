import { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of user data
interface User {
  id: string;
  name: string;
  email: string;
  role: 'entrepreneur' | 'mentor' | 'investor';
  profileImage?: string;
}

// Define the shape of the auth context
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, role: User['role']) => Promise<void>;
  logout: () => void;
}

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for demonstration
const MOCK_USERS = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    role: 'entrepreneur' as const,
    profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
    role: 'mentor' as const,
    profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

// Create the auth provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('senti_user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const isAuthenticated = !!user;

  // Mock login function
  const login = async (email: string, password: string) => {
    // In a real app, you would make an API call to validate credentials
    const foundUser = MOCK_USERS.find(u => u.email === email && u.password === password);
    
    if (!foundUser) {
      throw new Error('Invalid email or password');
    }
    
    const { password: _, ...userWithoutPassword } = foundUser;
    setUser(userWithoutPassword);
    localStorage.setItem('senti_user', JSON.stringify(userWithoutPassword));
  };

  // Mock register function
  const register = async (email: string, password: string, name: string, role: User['role']) => {
    // In a real app, you would make an API call to create a new user
    const existingUser = MOCK_USERS.find(u => u.email === email);
    
    if (existingUser) {
      throw new Error('Email already in use');
    }
    
    const newUser = {
      id: Math.random().toString(36).substring(2, 11),
      name,
      email,
      role,
    };
    
    setUser(newUser);
    localStorage.setItem('senti_user', JSON.stringify(newUser));
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('senti_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};