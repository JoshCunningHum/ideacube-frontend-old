import { defineStore } from 'pinia'

// Handles all responsive-based state management

export const useResponsiveStore = defineStore('Responsive', () => {

  const { isSmall, isMedium, isLarge, isExtra, isLessExtra, isLessLarge } = useScreen();

  // Mobile Sidebar Activiation
  const mob_sidebar_open = ref(false);

  return {
    isSmall,
    isMedium,
    isLarge,
    isExtra,

    isLessLarge,
    isLessExtra,
    
    mob_sidebar_open
  }
})
