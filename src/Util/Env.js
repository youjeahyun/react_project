import {getCookie} from '../Util/Cookies'

export const SERVER_URL = "https://sol-api.ps-e.co.kr" // Proxy 설정시 build 할때 활성화 (default)
// export const SERVER_URL = "" // Proxy 설정시 로컬 테스트 할때 활성화

export function getApiKey() {
    return getCookie('API_KEY');
}

export function getAxiosApiKeyOption() {
    const API_KEY = getApiKey();
    return {
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            API_KEY: API_KEY // 'API_KEY': API_KEY 라고 적어야 한다는 이슈가 있음. 차후 확인
        }
    };
}

export const AXIOS_OPTION = {
    withCredentials:true,
};

export const AXIOS_FORM_DATA_OPTION = {
    withCredentials:true
}


export const COOKIE_DOMAIN = "";
// export const COOKIE_DOMAIN = "localhost";