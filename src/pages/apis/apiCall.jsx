import axios from 'axios';

//apiCall 공통처리
const apiCall = (url, method, payload = {}, options) => {
  const { timeout, withCredentials, responseType, authorization } =
    options || {};
  const headers = {};
  if (authorization) {
    // headers['Authorization'] = `Bearer ${authorization}`;
    headers['Authorization'] = authorization;
    headers['Access-Control-Allow-Origin'] = '*';
    headers['Content-Type'] = 'application/json';
  }
  return axios({
    url,
    method,
    data:
      (method === 'post' || method === 'put' || method === 'delete') && payload,
    params: method === 'get' && payload,
    timeout: timeout || 60000, // 60초 timeout
    withCredentials: withCredentials || false, // CORS 설정
    responseType: responseType || 'json',
    headers,
  });
};

export default apiCall;