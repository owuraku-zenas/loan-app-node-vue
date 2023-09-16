import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterCustomerView from "@/views/RegisterCustomerView.vue";
import CreateLoanView from "@/views/CreateLoanView.vue";
import {useStore} from "vuex";
import {computed} from "vue";

function hasJwtTokenInCookie(cookieName) {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();

        // Check if the cookie name matches the provided name (e.g., 'jwtToken')
        if (cookie.startsWith(`${cookieName}=`)) {
            // Extract the token value from the cookie
            const token = cookie.substring(`${cookieName}=`.length, cookie.length);

            // Check if the extracted token is not empty
            if (token) {
                return true; // JWT token found in the cookie
            }
        }
    }

    return false; // JWT token not found in the cookie
}


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {auth: true}
        },
        {
            path: '/signin',
            name: 'signin',
            component: LoginView,
            meta: {auth: false},
        },
        {
            path: '/customer/register',
            name: 'register',
            component: RegisterCustomerView,
            meta: {auth: true}
        },
        {
            path: '/loan',
            name: 'loan',
            component: CreateLoanView,
            meta: {auth: true}
        }
    ]
})

router.beforeEach( (to, from) => {
    const requiresAuth = to.matched.some((record) => record.meta.auth);

    const isAuthenticated = hasJwtTokenInCookie("jwt");
    console.log(requiresAuth, isAuthenticated)

    if (to.name === "signin" && isAuthenticated) return "/"

    if (requiresAuth && !isAuthenticated) {
      return "/signin"
    }


})


export default router
