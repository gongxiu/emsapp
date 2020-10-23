import config from "@/config";
import http from "@/utils/request";
const { request } = http;
/* request层做了baseUrl，若覆盖只需自定义url */

/* 米拍 */
// 动态列表
export function getDashboard(data) {
  return request({
    baseUrl: config.mepai, // 自定义请求host
    url: "dashboard",
    method: "get",
    data
  });
}

/* export function getDashboard(data) {
  return request({
    baseUrl: config.mepai, // 自定义请求host
    url: "dashboard",
    method: "get",
    data
  });
} */
