import { useState } from "react"
import { Button, ButtonGroup } from "flowbite-react"
import MenuItem from "../components/MenuItem"
import { menu } from "../data/menu"

export default function Menu() {
  const [category, setCategory] = useState<"rosse" | "bianche" | "sfiziosita" | "bevande">("rosse")

  const currentMenu = menu[category]

  return (
    <div className="flex flex-col items-center">
      {/* Buttons to switch category */}
      <ButtonGroup className="mb-6 justify-center">
        <Button
          color={category === "rosse" ? "[#d6bea6]" : "[#b5855a]"}
          onClick={() => setCategory("rosse")}
        >
          Pizze Rosse
        </Button>
        <Button
          color={category === "bianche" ? "[#d6bea6]" : "[#b5855a]"}
          onClick={() => setCategory("bianche")}
        >
          Pizze Bianche
        </Button>
        <Button
          color={category === "sfiziosita" ? "[#d6bea6]" : "[#b5855a]"}
          onClick={() => setCategory("sfiziosita")}
        >
          Sfiziosità
        </Button>
        <Button
          color={category === "bevande" ? "[#d6bea6]" : "[#b5855a]"}
          onClick={() => setCategory("bevande")}
        >
          Bevande
        </Button>
      </ButtonGroup>

      <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-xl">

      {/* Render selected category */}
      {currentMenu.map((pizza) => (
        <MenuItem
          key={pizza.name}
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
        />
      ))}

      </div>
    </div>
    
  )
}