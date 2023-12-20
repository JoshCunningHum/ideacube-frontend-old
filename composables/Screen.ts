import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export const useScreen = () => {
  const breakpoints = useBreakpoints(breakpointsTailwind);

  const isSmall = breakpoints.smallerOrEqual('sm');
  const isMedium = breakpoints.between('sm', 'md');
  const isLarge = breakpoints.between('md', 'lg');
  const isExtra = breakpoints.between('lg', '2xl');

  const isLessLarge = breakpoints.smaller('lg');
  const isLessExtra = breakpoints.smaller('xl');

  const orientation = useScreenOrientation();

  return {
    isSmall,
    isMedium,
    isLarge,
    isExtra,

    isLessLarge,
    isLessExtra,

    orientation
  }
}
