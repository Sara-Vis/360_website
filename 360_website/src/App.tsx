// import logo380 from '/380_logo_no_sfondo.svg'
import './App.css'
import Navbar from './components/Navbar.tsx'
import CallButton from './components/CallButton.tsx'
import Info from './components/Info.tsx'
// import MenuItem from "./components/MenuItem.tsx"
// import { menu } from "./data/menu.ts"
import Menu from './components/Menu.tsx'


function App() {

  return (
            <div className="relative min-h-screen">

              {/* Background image */}
              <div className="absolute inset-0 bg-[url('/sfondo.jpg')] bg-cover bg-center opacity-20"></div>

              {/* Color overlay */}
              <div className="absolute inset-0 bg-[#d6bea6]/50 opacity-20"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="pt-10"></div>
                <Navbar />

                <Info />

                <CallButton />
                <div className="pt-20"></div>

                <Menu />

              </div>

            </div>
                
  )
}

export default App
