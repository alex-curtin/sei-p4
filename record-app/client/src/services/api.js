import axios from 'axios';

const BASE_URL = 'http://localhost:3000'
const api = axios.create({
  baseURL: BASE_URL
})

////////////////////AUTH API///////////////////////////////
const getToken = () => {
  const token = localStorage.getItem('jwt');
  api.defaults.headers.common.authorization = `Bearer ${token}`;
}

const storeToken = (token) => {
  localStorage.setItem('jwt', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`;
};

export const loginUser = async (loginData) => {
  const res = await api.post('/auth/login', loginData);
  const { user, token } = res.data;
  storeToken(token);
  return user;
}

export const registerUser = async (registerData) => {
  const res = await api.post('/users/', { user: registerData });
  const token = res.data.token;
  return res.data
}

export const verifyToken = async () => {
  const token = localStorage.getItem('jwt');
  if (token) {
    try {
      const res = await api.get('/users/verify', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      debugger;
      return res.data.user;
    } catch (e) {
      console.log(e.message);
      console.log('invalid token');
    }
  }
  else { console.log('user not logged in') };
};

////////////////////USER API///////////////////////////////
export const fetchUsers = async () => {
  const res = await api.get('/users');
  return res.data;
}

export const fetchUser = async (id) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
}

export const updateUser = async (id, data) => {
  getToken();
  const res = await api.put(`/users/${id}`, data);
  return res.data;
}

export const deleteUser = async (id) => {
  getToken();
  const res = await api.delete(`/users/${id}`);
  return res.data;
}


////////////////////RECORD API///////////////////////////////
export const fetchRecords = async (userId) => {
  const res = await api.get(`/users/${userId}/records`)
  return res.data;
}

export const fetchRecord = async (userId, id) => {
  const res = await api.get(`/users/${id}/records/${id}`);
  return res.data;
}

export const createRecord = async (data) => {
  getToken();
  const userId = data.user_id;
  const res = await api.post(`/users/${userId}/records/`, data);
  return res.data;
}

export const updateRecord = async (data) => {
  getToken();
  const userId = data.user_id;
  const id = data.id;
  const res = await api.put(`/users/${userId}/records/${id}`, data);
  return res.data;
}

export const deleteRecord = async (userId, id) => {
  getToken();
  const res = await api.delete(`/users/${userId}/records/${id}`);
  return res.data;
}

////////////////////COMMENT API///////////////////////////////
export const fetchComments = async (userId, recordId) => {
  const res = await api.get(`/users/${userId}/records/${recordId}/comments`);
  return res.data;
}

export const createComment = async (userId, data) => {
  getToken();
  const recordId = data.record_id;
  const res = await api.post(`/users/${userId}/records/${recordId}/comments`, data);
  return res.data;
}

export const updateComment = async (userId, data) => {
  getToken();
  const recordId = data.record_id;
  const id = data.id;
  const res = await api.put(`/users/${userId}/records/${recordId}/comments/${id}`, data);
  return res.data;
}

export const deleteComment = async (userId, recordId, id) => {
  getToken();
  const res = await api.delete(`/users/${userId}/records/${recordId}/comments/${id}`);
  return res.data;
}