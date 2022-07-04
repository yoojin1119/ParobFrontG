/**
 * @desc 정규식&&토큰 helper
 */
 export default class helper {
    /**
     * 국/영 최소2자 - 촤대 30자 (영문은 숫자도 가능) (완료)
     * @param name
     * @return {boolean}
     *
     */
    static nameValid(name ) {
        return /[가-힣|a-zA-Z0-9]{2,30}$/.test(name);
    }

    /**
     *  email은 @.포함 (완료)
     * @param email
     * @return {boolean}
     */
    static emailValid(email) {
        return /^[^\s@]+\@[^\s@]+\.[^\s@]{2,3}$/.test(email);
    }

    /**
     * 비밀번호는 8-16자, 영문+숫자 1개이상 필수, 특문선택
     * @param password
     * @return {boolean}
     */
    static passwordValid(password) {
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/.test(password);
    }

    /**
     * 비밀번호는 영문 확인
     * @param password
     * @return {boolean}
     */
    static engValid(password) {
        return /^.*(?=.*[a-zA-Z]).*$/.test(password);
    }

    /**
     * 비밀번호는 숫자 확인
     * @param password
     * @return {boolean}
     */
    static numValid(password) {
        return /^.*(?=.*[0-9]).*$/.test(password);
    }

    /**
     * 비밀번호는 길이 확인
     * @param password
     * @return {boolean}
     */
    static limitValid(password) {
        return /^.*(?=^.{8,16}$).*$/.test(password);
    }

    /**
     * 핸드폰번호는 앞3자는 01(0,1,6,7,8,9)만가능, 숫자 10자-11자
     * @param phone_number
     * @return {boolean}
     */
    static phoneNumberValid(phone_number) {
        return /^01[016789]{1}[0-9]{3,4}[0-9]{4}/.test(phone_number);
    }

    /**
     * 닉네임은 국/영/숫자(특문안됨), 최소2자 - 최대12자
     * @param nickname
     * @return {boolean}
     */
    static nicknameValid(nickname) {
        return /^[가-힣ㄱ-ㅎㅏ-ㅣA-Za-z0-9]{2,12}$/.test(nickname);
    }

    /**
     * 생년월일은 0000-00-00 형식 // 년 1900-1999, 2000-2099 //월1-12//일 1-31
     * @param birthday
     * @return {boolean}
     */
    static birthdayValid(birthday) {
        return /^(19[0-9][0-9]|20\d{2})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(birthday);
    }

    /**
     * 로컬스토리지 토큰
     * @param authToken
     */
    static setAuthenticateToken(authToken) {
        window.localStorage.setItem('parobAuthToken', authToken);
    }

    static clearAuthenticateToken() {
        window.localStorage.removeItem('parobAuthToken');
    }

    static getAuthenticateToken() {
        return process.browser && window.localStorage.getItem('parobAuthToken');
    }

    /**
     * 세션스토리지 토큰
     * @param authToken
     */
    static setSessionAuthenticateToken(authToken) {
        window.sessionStorage.setItem('parobAuthToken', authToken);
    }

    static clearSessionAuthenticateToken() {
        window.sessionStorage.removeItem('parobAuthToken');
    }

    static getSessionAuthenticateToken() {
        return process.browser && window.sessionStorage.getItem('parobAuthToken');
    }

    /**
     * 세션스토리지 이메일
     * @param authToken
     */
    static setSessionAuthEmail(email) {
        window.sessionStorage.setItem('parobAuthEmail', email);
    }

    static clearSessionAuthEmail() {
        window.sessionStorage.removeItem('parobAuthEmail');
    }

    static getSessionAuthEmail() {
        return process.browser && window.sessionStorage.getItem('parobAuthEmail');
    }

    /**
     * 세션스토리지 템플릿네임
     * @param authToken
     */
    static setSessionTName(TName) {
        window.sessionStorage.setItem('userTName', TName);
    }

    static clearSessionTName() {
        window.sessionStorage.removeItem('userTName');
    }

    static getSessionTName() {
        return process.browser && window.sessionStorage.getItem('userTName');
    }

    /**
     * 로컬스토리지 템플릿네임
     * @param authToken
     */
    static setLocalTName(TName) {
        window.localStorage.setItem('userTName', TName);
    }

    static clearLocalTName() {
        window.localStorage.removeItem('userTName');
    }

    static getLocalTName() {
        return process.browser && window.localStorage.getItem('userTName');
    }

    /**
     * setCookie
     */
    static setCookie(cookieNamen, cookieValue, cookieExpireDays) {
        const d = new Date();
        d.setTime(d.getTime() + cookieExpireDays * 24 * 60 * 60 * 1000);
        const expires = `expires=${d.toUTCString()}`;
        document.cookie = `${cookieName}=${cookieValue};${expires}`;
    }

    /**
     * getCookie
     */
    static getCookie(cookieName) {
        const name = `${cookieName}=`;
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == '') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }
}
