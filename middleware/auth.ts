import { get } from '@vueuse/core';

export default defineNuxtRouteMiddleware((to, from) => {
    const account = useAccount();
    
    if(account.isLoggedIn()){
        const user = get(account.user);
        // Students shouldn't be in admin, vice versa
        if(to.path.startsWith('/admin') && !user.is_admin){
            return navigateTo(`/${nameToEmail(user.first_name || '', user.last_name || '')}`);
        }else if(user.is_admin && !to.path.startsWith('/admin')){
            return navigateTo(`/admin`);
        }
    }

    // If not logged in at all, redirect to login
    return navigateTo('/login');
})
