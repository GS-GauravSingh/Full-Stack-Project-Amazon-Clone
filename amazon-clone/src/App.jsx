import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"
import Home from "./Home"
import Footer from "./Footer"

function App() {
  
  return (
    <div className="app">
      
        {/* Header */}
        <DesktopHeader />
        <MobileHeader />


        {/* Home */}
        <Home />

        {/* Footer */}
        <Footer />
    </div>
  )
}

export default App
