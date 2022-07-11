import { apiCall } from './apiCall';
import { SERVER_API_HOST } from '../../utils/common/environment';

// 회원가입
export const postSignupApi = (
  nickname,
  password,
  email,
  country,
) => {
  return apiCall(
    `${SERVER_API_HOST}/user`,
    'post',
    {
        nickname,
        password,
        email,
        country,
    },
    { ContentType: 'application/json' }
  );
};
