import Loading from './pages/Loading'
import Home from './pages/Home'
import { useEffect, useState } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return <>{isLoading ? <Loading /> : <Home />}</>
}

export default App
