import Vue from 'vue';
import { API } from '../db-api';

Vue.prototype.$api = API;
//export default ({ Vue }) => Vue.prototype.$api = API;
