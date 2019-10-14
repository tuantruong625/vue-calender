import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';


Vue.config.productionTip = false

Vue.use(VueTextareaAutosize);

firebase.initializeApp({
  apiKey: "AIzaSyDX1g05_ZWeqwDGyIGy7Xziv36yyhLG6IY",
  authDomain: "vue-calendar-a7f26.firebaseapp.com",
  databaseURL: "https://vue-calendar-a7f26.firebaseio.com",
  projectId: "vue-calendar-a7f26",
  storageBucket: "vue-calendar-a7f26.appspot.com",
  messagingSenderId: "354397650546",
  appId: "1:354397650546:web:ef00c07df58865803c8ceb"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
