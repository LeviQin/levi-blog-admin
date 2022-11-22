import request from "@/utils/request";

export const getSiteList = () => {
    return request({
        method: 'get',
        url: '/api/getSiteList',
    });
};