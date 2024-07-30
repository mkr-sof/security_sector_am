import { useState, useLayoutEffect } from 'react'

const mediaQueries = [
    'max-width: 490px',
    'max-width: 650px',
    'max-width: 1140px'
]

 const useMatchMedia = (mediaQuery) => {
    const mediaQueryList = mediaQueries.map(query => matchMedia(`(${query})`))
    const getMatches = () => mediaQueryList.map(mql => mql.matches)

    const [matches, setMatches] = useState(getMatches)

    useLayoutEffect(() => {
        const handler = () => setMatches(getMatches())

        mediaQueryList.forEach(mql => mql.addEventListener('change', handler))

        return () => mediaQueryList.forEach(mql => mql.removeEventListener('change', handler))
    }, [mediaQueryList, getMatches])

    // return [isMobile, isTablet, isDesktop].reduce((acc, screen, index) => ({
    //     ...acc,
    //     [screen]: mediaQueries[index]
    // }), {})
     return {
         isMobile: matches[0],
         isTablet: matches[1],
         isDesktop: matches[2]
     };
}
export default useMatchMedia;