// @ts-ignore

export default defineAppConfig({
    djangourl: 'http://127.0.0.1:8000',
    // NUXT UI Config
    ui: {
        primary: 'accent',
        gray: 'prim',
        input: {
            rounded: 'rounded-sm',
        },
        button: {
            rounded: 'rounded-sm',
            font: 'helvetica round',
            color: {
                white: {
                    solid: 'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-950 dark:hover:bg-gray-900/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400'
                }
            }
        },
        formGroup: {
            help: 'text-xs mt-0',
            error: 'text-xs mt-0'
        },
        popover: {
            rounded: 'rounded-sm'
        }
    },
    // Nuxt Config
    nuxtIcon: { 
        class: '--v--icon'
    }
})