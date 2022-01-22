import React from 'react'

const useWindowSize = () => {
  if (typeof window !== 'undefined') {
    const [windowSize, setWindowSize] = React.useState({
      width: window.innerWidth,
      height: window.innerHeight
    })

    function changeWindowSize () {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    React.useEffect(() => {
      window.addEventListener('resize', changeWindowSize)

      return () => {
        window.removeEventListener('resize', changeWindowSize)
      }
    }, [])

    return windowSize
  } else {
    return { width: 450, height: 600 }
  }
}

export default useWindowSize
