import vuelidate from 'vuelidate';
import Vue from 'vue';
import Notifications from 'vue-notification/dist/ssr';
import axios from "axios";

Vue.use(vuelidate);
Vue.use(Notifications);
axios.defaults.baseURL = process.env.API_URL;