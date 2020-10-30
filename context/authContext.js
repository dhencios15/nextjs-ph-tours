import { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

import { loginUser, logoutUser, signUpUser } from 'services/authServices';
import { getUser } from 'services/userServices';
import Api from 'services/Api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token');
      if (token) {
        Api.defaults.headers.Authorization = `Bearer ${token}`;
        const user = await getUser();
        if (user) setUser(user);
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async (emailAndPassword) => {
    const token = await loginUser(emailAndPassword);
    if (token) {
      // Cookies.set('token', token, { expires: 60 });
      Api.defaults.headers.Authorization = `Bearer ${token}`;
      const user = await getUser();
      setUser(user);
      setError(null);
      window.location.pathname = '/';
    } else {
      setError('Invalid Username or Password');
    }
  };

  const logout = async () => {
    await logoutUser();
    // Cookies.remove('token');
    setUser(null);
    delete Api.defaults.headers.Authorization;
    window.location.pathname = '/login';
    setLoading(false);
    setError(null);
  };

  const signup = async (userInfo) => {
    const token = await signUpUser(userInfo);
    if (token) {
      Cookies.set('token', token, { expires: 60 });
      Api.defaults.headers.Authorization = `Bearer ${token}`;
      const user = await getUser();
      setUser(user);
      setError(null);
      window.location.pathname = '/';
    } else {
      setError('Invalid Singning up');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        loading,
        logout,
        signup,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const ProtectRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated && window.location.pathname === '/login') {
    window.location.pathname = '/';
  }
  return children;
};
