import { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
// import Router, { useRouter } from 'next/router';

import { loginUser, logoutUser, signUpUser } from 'services/authServices';
import { getUser } from 'services/userServices';
import { SpinnerIcon } from 'icons';
import Api from 'services/Api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
      Cookies.set('token', token, { expires: 60 });
      Api.defaults.headers.Authorization = `Bearer ${token}`;
      const user = await getUser();
      setUser(user);
      window.location.pathname = '/';
    }
  };

  const logout = async () => {
    await logoutUser();
    Cookies.remove('token');
    setUser(null);
    delete Api.defaults.headers.Authorization;
    window.location.pathname = '/login';
  };

  const signup = async (userInfo) => {
    const token = await signUpUser(userInfo);
    if (token) {
      Cookies.set('token', token, { expires: 60 });
      Api.defaults.headers.Authorization = `Bearer ${token}`;
      const user = await getUser();
      setUser(user);
      window.location.pathname = '/';
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, loading, logout, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const ProtectRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  if (
    isLoading ||
    (!isAuthenticated && window.location.pathname !== '/login')
  ) {
    return (
      <div className='flex justify-center items-center mt-10'>
        <SpinnerIcon className='animate-spin text-gray-400 h-64 w-64' />
      </div>
    );
  } else if (isAuthenticated && window.location.pathname === '/login') {
    window.location.pathname = '/';
  }
  return children;
};
