import request from "@/utils/request";

export const login = (data) => {
    return request({
        method: 'post',
        url: '/api/login',
        data
    });
};