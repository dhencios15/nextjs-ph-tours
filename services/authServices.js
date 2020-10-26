import api from './Api';

const loginUser = async (emailAndPassword) => {
  try {
    const res = await api.post('users/login', emailAndPassword);
    return res.data.token;
  } catch (error) {
    console.log(error.res);
    return error.res;
  }
};

const signUpUser = async (userInfo) => {
  try {
    const res = await api.post('users/signup', { ...userInfo });
    return res.data.token;
  } catch (error) {
    return error.res;
  }
};

const logoutUser = async () => {
  try {
    const res = await api.get('users/logout');
    return res.data.status;
  } catch (error) {
    return error.res;
  }
};

export { loginUser, signUpUser, logoutUser };
