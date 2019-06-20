import axios, { AxiosAdapter } from 'axios';
import qs from 'qs';
import '@/http/config';
import CONSTANT from '@/base/constant';
import IMifH5admin from '@/entity/IMifH5admin';

const $http = axios;
const requestBase = `${CONSTANT.HTTP_PREFIX}`;

//保存h5样式配置
export const http_saveH5Style = (data: IMifH5admin, adapter: AxiosAdapter) => 
  $http.post(requestBase + 'api/weixin/saveStyle', data, { adapter });

export const http_test = (data) => 
  $http.post(requestBase + 'api/weixin/saveStyle', data)

//获取h5样式配置
export const http_h5StyleInfo = () =>
  $http.get(requestBase + 'api/weixin/styleInfo')