import axios from 'axios';
import ZetNotification from './notice';
// const accessToken = localStorage.getItem('token');
const instance = axios.create({
    baseURL: 'http://dev.aps.zetyun.cn',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        // 'Authorization': 'Bearer ec2617a9-6857-4266-b504-ece3bbb2a4ec',
        sessionId: 'ec2617a9-6857-4266-b504-ece3bbb2a4ec',
    }
});
instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    console.log(response, '拦截');
    if (response.data.code === 0) {
        return response.data || {};
    }
    if (response.data.code === 590403) {
        console.log('登出');
        return;
    }
    ZetNotification(response);
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default instance;