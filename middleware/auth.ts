import { get } from '@vueuse/core';

export default defineNuxtRouteMiddleware((to, from) => {
    const account = useAccount();
    const user = get(account.user);
    
    // Exceptions where students can freely go even if the route does not starts with their email. Manually Set
    const route_exceptions_students: string[] = [];
    // Exceptions where admin can freely go even if the route does not starts with admin. Manually Set
    const route_exceptions_admin: string[] = [];

    const isRouteExcepted = (route: string, exceptions: string[]) => exceptions.some(exc => route.startsWith(`/${exc}`));

    if(account.isLoggedIn() && !!user){

        const computedEmail = nameToEmail(user.first_name || '', user.last_name || '');

        // Students shouldn't be in admin, vice versa
        if(to.path.startsWith('/admin') && !user.is_admin){
            return navigateTo(`/${computedEmail}`);
        }else if(user.is_admin 
            && !to.path.startsWith('/admin') 
            && !isRouteExcepted(to.path, route_exceptions_admin)){
            return navigateTo(`/admin`);
        }

        // Students shouldn't be in the account of other students
        if(!user.is_admin 
            && !to.path.startsWith(`/${computedEmail}`) 
            && !isRouteExcepted(to.path, route_exceptions_students)){
            return navigateTo(`/${computedEmail}`);
        }
        
        return;
    }

    // If not logged in at all, redirect to login
    return navigateTo('/login');
})
