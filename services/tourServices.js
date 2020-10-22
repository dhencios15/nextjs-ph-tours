import api from './Api';

const getAllTours = async () => {
  try {
    const res = await api.get('/tours');
    return res.data.data.doc;
  } catch (error) {
    return error.res;
  }
};

const getTour = async (id) => {
  try {
    const res = await api.get(`/tours/${id}`);
    return res.data.data.doc;
  } catch (error) {
    return error.res;
  }
};

export { getAllTours, getTour };
