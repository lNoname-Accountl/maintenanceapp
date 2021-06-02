import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import Login from './components/LogIn.vue';
import BranchInfo from './components/BranchInfo.vue';
import WrongPassword from './components/WrongPassword.vue';
import PlsDont from './components/PlsDont.vue';
import Register from './components/Register.vue';
import MaintenanceForm from './components/MaintenanceForm.vue';
import HomePage from './components/HomePage.vue';
import AboutUs from './components/AboutUs.vue';
import MaintenanceLog from './components/MaintenanceLog.vue';
import PartRequest from './components/PartRequest.vue';
import PartInfo from './components/PartInfo.vue';
import EmergencyRepair from './components/EmergencyRepair.vue';
import CustomerInfo from './components/CustomerInfo.vue';
import StaffForm from './components/StaffForm.vue';
import Feedback from './components/Feedback.vue';
import Payment from './components/Payment.vue';

Vue.config.productionTip = false 

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store(
    {
        state: {
            authenticated : false
        },
        mutations: {
            setAuthentication(state, status){
                state.authenticated = status;
            }
        }
    }

)

const router = new VueRouter({
    routes : [
      {
        path: "/",
        redirect: {
            name : "homepage"
        }
      },
      {
          path: "/login",
          name: "login",
          component: Login
      },
      {
          path: "/branchinfo",
          name: "branchinfo",
          component: BranchInfo,
      },
      {
          path: "/wrongpasswrod",
          name: "wrongpassword",
          component: WrongPassword
      },
      {
        path: "/plsdont",
        name: "plsdont",
        component: PlsDont
      },
      {
        path: "/register",
        name: "register",
        component: Register
      },
      {
        path: "/maintenanceform",
        name: "maintenanceform",
        component: MaintenanceForm
      },
      {
        path: "/homepage",
        name: "homepage",
        component: HomePage
      },
      {
        path: "/aboutus",
        name: "aboutus",
        component: AboutUs
      },
      {
        path: "/maintenancelog",
        name: "maintenancelog",
        component: MaintenanceLog
      },
      {
        path: "/partrequest",
        name: "partrequest",
        component: PartRequest
      },
      {
        path: "/partinfo",
        name: "partinfo",
        component: PartInfo
      },
      {
        path: "/emergencyrepair",
        name: "emergencyrepair",
        component: EmergencyRepair
      },
      {
        path: "/customerinfo",
        name: "customerinfo",
        component: CustomerInfo
      },
      {
        path: "/staffform",
        name: "staffform",
        component: StaffForm
      },
      {
        path: "/feedback",
        name: "feedback",
        component: Feedback
      },
      {
        path: "/payment",
        name: "payment",
        component: Payment
      }
      

    ]
}
);

new Vue({
  render: h => h(App),
  store: store,
  router: router,
}).$mount('#app')
