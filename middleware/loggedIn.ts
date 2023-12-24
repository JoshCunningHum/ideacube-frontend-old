import { get } from '@vueuse/core';

export default defineNuxtRouteMiddleware((to, from) => {
    const account = useAccount();
    const user = get(account.user);

    // If not logged in, then continue the heck you're doing
    if(!account.isLoggedIn() || !user) return;

    // If Logged then
    return navigateTo(`/${user.is_admin ? 'admin' : nameToEmail(user.first_name || '', user.last_name || '')}`);
})
