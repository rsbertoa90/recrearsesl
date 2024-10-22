export const useMq = () => {
    const { isMobile } = useDevice()
   return isMobile ? 'mob' : 'lg'
}