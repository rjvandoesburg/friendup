
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import store from './store'
import VModal from 'vue-js-modal'

Vue.use(VModal);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('google-maps', require('./components/GoogleMaps'));
Vue.component('fup-login-modal', require('./components/auth/LoginModal'));

const app = new Vue({
    el: '#app',
    store,
    mounted() {
        this.getGeoData();
    },
    methods: {
        getGeoData() {
            if ("geolocation" in navigator) {
                /* geolocation is available */
                navigator.geolocation.getCurrentPosition(position => {
                    this.$store.commit('setCurrentLocation', {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                });
                navigator.geolocation.watchPosition(position => {
                    this.$store.commit('setCurrentLocation', {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                });
            }
        },
    }
});