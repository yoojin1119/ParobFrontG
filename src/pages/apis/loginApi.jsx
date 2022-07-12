import { apiCall } from './apiCall';
import { SERVER_API_HOST } from '../../utils/common/environment';

const postLoginApi = (email, password) => {
  return apiCall(
    `${SERVER_API_HOST}/login/authenticate`,
    'post',
    { email, password },
    { ContentType: 'application/json' }
  );
};

export default postLoginApi;