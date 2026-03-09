import axios from 'axios'
import Cookies from 'js-cookie'

const api = axios.create({
  baseURL: '/api',
})

/**
 * Request 인터셉터
 * - 쿠키에서 JWT 를 읽어 모든 요청에 자동으로 Authorization 헤더에 지정
 */
api.interceptors.request.use(
  (config) => {
    const jwt = Cookies.get("jwt")
    if( jwt ) {
      config.headers.Authorization = `Bearer ${jwt}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

/**
 * Response 인터셉터
 * - 401 응답 시, 로그인 페이지로 리다이렉트
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if( error.response && error.response.status === 401 ) {
      // 인증 정보 정리
      Cookies.remove("jwt")
      // 로그인 페이지로 리다이렉트
      // - 로그인 페이지가 아닌 경우만
      if( window.location.pathname !== '/login' ) {
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

export default api