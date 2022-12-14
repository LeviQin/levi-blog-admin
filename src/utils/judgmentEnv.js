/**
 * 获取baseUrl
 * @returns 
 */
export const getBaseURL = () => {
    const HOST = window.location.host;
    const PROD = "admin.leviqin.top"; // 生产环境
    return HOST === PROD ? `http://api.leviqin.top:3000` : `http://10.10.0.136:3000`;
}