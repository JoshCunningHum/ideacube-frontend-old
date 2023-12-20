import { get } from '@vueuse/core';

export default defineNuxtRouteMiddleware((to, from) => {
    const account = useAccount();

    // If not logged in, then continue the heck you're doing
    if(!account.isLoggedIn()) return;

    // If Logged then
    const user = get(account.user);
    return navigateTo(`/${user.is_admin ? 'admin' : nameToEmail(user.first_name || '', user.last_name || '')}`);
})
