export const useMq = () => {
    const { isDesktop } = useDevice()
    return isDesktop ? 'lg' : 'mob'
}