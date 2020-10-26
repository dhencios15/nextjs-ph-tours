import api from './Api';

const getUser = async () => {
  try {
    const res = await api.get('users/me');
    return res.data.data.doc;
  } catch (error) {
    return error.res;
  }
};

export { getUser };
