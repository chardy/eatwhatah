import { useEffect } from 'react'
import { initGA, logPageView } from '../utils/analytics'

export default ({ children }) => {

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, []);

  return (
    <div className="antialiased h-screen">
      { children }
    </div>
  )
}
