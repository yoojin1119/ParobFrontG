import { apiCall } from './apiCall';
import { SERVER_API_HOST } from '../../utils/common/environment';

// 회원가입
export const postSignupApi = (email,password,nickname,country) => {
  return apiCall(
    `${SERVER_API_HOST}/user`,
    'post',
    {
      email,
      password,
      nickname,
      country:'KOR'
    },
    { ContentType: 'application/json' }
  );
};
