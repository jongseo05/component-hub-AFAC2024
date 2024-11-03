import axios from 'axios';

const API_URL = 'http://localhost:5000'; // 백엔드 URL

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        // 로그인 성공 시 토큰 저장 또는 사용자 데이터 처리
        return response.data.success;
    } catch (error) {
        return false;
    }
};
