import axios from 'axios';
import { Notify, Loading } from 'quasar';

// API
import dictApi from './api/dict';
import minioApi from './api/minio';
import modelApi from './api/model';
import routerApi from './api/router';
import visicomApi from './api/visicom';

// ERR NOTIFY
const errorHandler = error => {
  if (error.response && error.response.status === 401) {
    window.location.href = `${process.env.BASE_API}/auth/login`;
  } else if (!error.status && !error.response) { // Network error
    Loading.hide();
    Notify.create({
      color: 'negative',
      timeout: 2500,
      message: error.message,
      position: 'top',
      icon: 'error'
    });
  } else {
    Loading.hide();
    Notify.create({
      color: 'negative',
      timeout: 2500,
      html: true,
      multiLine: true,
      message: `<strong>${error.response.statusText}</strong><br />${error.response.data.error ? error.response.data.error.message : error.message}`,
      position: 'top',
      icon: 'error'
    });
  }
  return Promise.reject(error);
};

// INSTANCES

const axiosInstance = axios.create();

const axiosInstanceServices = axios.create({
  baseURL: `${process.env.SERVICES_API}`
});

const axiosInstanceBase = axios.create({
  withCredentials: true,
  baseURL: `${process.env.BASE_API}/api`
});

const axiosInstanceDictionary = axios.create({
  withCredentials: true,
  baseURL: `${process.env.DICT_API}`
});

const axiosInstanceVisicom = axios.create({
  baseURL: `${process.env.MAP_DATA}`
});


axiosInstance.interceptors.response.use(response => response, errorHandler);
axiosInstanceBase.interceptors.response.use(response => response, errorHandler);
axiosInstanceDictionary.interceptors.response.use(response => response, errorHandler);
axiosInstanceVisicom.interceptors.response.use(response => response, errorHandler);
axiosInstanceServices.interceptors.response.use(response => response.data, errorHandler);

export default {

  axiosInstance,
  services: axiosInstanceServices,
  dict: dictApi(axiosInstanceDictionary),
  minio: minioApi(axiosInstanceBase),
  model: modelApi(axiosInstanceBase),
  router: routerApi(axiosInstanceBase),
  visicom: visicomApi(axiosInstanceVisicom)

}
