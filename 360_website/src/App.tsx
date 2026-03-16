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
                <div className="pt-10"></div>

                <Menu />

                {/* <h1 className="text-3xl text-[#b5855a] text-center font-bold mb-6">
                    Pizze Rosse
                  </h1>
                <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-xl">

                  {menu.rosse.map((pizza) => (
                    <MenuItem
                      key={pizza.name}
                      name={pizza.name}
                      ingredients={pizza.ingredients}
                      price={pizza.price}
                    />
                  ))}

                </div>

                <div className="pt-10"></div>
                <h1 className="text-3xl text-[#b5855a] text-center font-bold mb-6">
                    Pizze Bianche
                </h1>
                <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-xl">

                  {menu.bianche.map((pizza) => (
                    <MenuItem
                      key={pizza.name}
                      name={pizza.name}
                      ingredients={pizza.ingredients}
                      price={pizza.price}
                    />
                  ))}

                </div>

                <div className="pt-10"></div>
                <h1 className="text-3xl text-[#b5855a] text-center font-bold mb-6">
                    Sfiziosità
                </h1>
                <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-xl">

                  {menu.sfiziosita.map((pizza) => (
                    <MenuItem
                      key={pizza.name}
                      name={pizza.name}
                      ingredients={pizza.ingredients}
                      price={pizza.price}
                    />
                  ))}

                </div>

                <div className="pt-10"></div>
                <h1 className="text-3xl text-[#b5855a] text-center font-bold mb-6">
                    Bevande
                </h1>
                <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-xl">

                  {menu.bevande.map((pizza) => (
                    <MenuItem
                      key={pizza.name}
                      name={pizza.name}
                      ingredients={pizza.ingredients}
                      price={pizza.price}
                    />
                  ))}

                </div> */}

              </div>

            </div>
                
  )
}

export default App
