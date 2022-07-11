import { apiCall } from './apiCall';
import { SERVER_API_HOST } from 'utils/common/environment';

export const postLoginApi = (email, password) => {
  return apiCall(
    `${SERVER_API_HOST}/user/login`,
    'post',
    { email, password },
    { ContentType: 'application/json' }
  );
};

export const postRequestEamilForNewPasswordApi = (email) => {
  return apiCall(
    `${SERVER_API_HOST}/user/request_resave_password`,
    'post',
    { email },
    { ContentType: 'application/json' }
  );
};

export const postNewPasswordApi = (
  email,
  password
) => {
  return apiCall(
    `${SERVER_API_HOST}/user/resave_password`,
    'post',
    { email, password },
    { ContentType: 'application/json' }
  );
};