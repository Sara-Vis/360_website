// import { useState } from "react"
// import { Button, ButtonGroup, createTheme, ThemeProvider } from "flowbite-react"
// import MenuItem from "../components/MenuItem"
// import { menu } from "../data/menu"

// const customTheme = createTheme({
//   button: {
//     color: {
//       primary: "bg-[#b5855a] text-white",
//       secondary: "bg-[#d6bea6] text-gray-800 hover:bg-[#b5855a] hover:text-white",
//     },
//     size: {
//       lg: "px-10 py-6 text-lg",
//     },
//   },
// });

// export default function Menu() {
//   const [category, setCategory] = useState<"rosse" | "bianche" | "sfiziosita" | "bevande">("rosse")

//   const currentMenu = menu[category]

//   return (
//     <div className="flex flex-col items-center">
//       {/* Buttons to switch category */}
//       <ThemeProvider theme={customTheme}>
//         <ButtonGroup className="flex flex-col sm:flex-row border-none mb-6 justify-center">
//             <Button className="border-none ring-0 focus:ring-0 focus:outline-none"
//             color={category === "rosse" ? "primary" : "secondary"}
//             size="lg"
//             onClick={() => setCategory("rosse")}
//             >
//             Pizze Rosse
//             </Button>
//             <Button className="border-none ring-0 focus:ring-0 focus:outline-none"
//             color={category === "bianche" ? "primary" : "secondary"}
//             size="lg"
//             onClick={() => setCategory("bianche")}
//             >
//             Pizze Bianche
//             </Button>
//             <Button className="border-none ring-0 focus:ring-0 focus:outline-none"
//             color={category === "sfiziosita" ? "primary" : "secondary"}
//             size="lg"
//             onClick={() => setCategory("sfiziosita")}
//             >
//             Sfiziosità
//             </Button>
//             <Button className="border-none ring-0 focus:ring-0 focus:outline-none"
//             color={category === "bevande" ? "primary" : "secondary"}
//             size="lg"
//             onClick={() => setCategory("bevande")}
//             >
//             Bevande
//             </Button>
//         </ButtonGroup>
//       </ThemeProvider>
//       <div className="max-w-full min-w-2xl bg-white p-10 rounded-2xl shadow-xl">

//       {/* Render selected category */}
//       {currentMenu.map((pizza) => (
//         <MenuItem
//           key={pizza.name}
//           name={pizza.name}
//           ingredients={pizza.ingredients}
//           price={pizza.price}
//         />
//       ))}

//       </div>
//     </div>
    
//   )
// }


import { useState } from "react";
import { Button, ThemeProvider, createTheme } from "flowbite-react";
import MenuItem from "./MenuItem";
import { menu } from "../data/menu";

const customTheme = createTheme({
  button: {
    color: {
      primary: "bg-[#b5855a] text-white",
      secondary:
        "bg-[#d6bea6] text-gray-800 hover:bg-[#b5855a] hover:text-white",
    },
    size: {
      lg: "px-4 md:px-6 py-3 md:py-4 text-base md:text-lg",
    },
  },
});

type Category = "rosse" | "bianche" | "sfiziosita" | "bevande";

export default function Menu() {
  const [category, setCategory] = useState<Category>("rosse");
  const currentMenu = menu[category];

  return (
    <div className="flex flex-col items-center w-full px-4 md:px-0">
      {/* Category Buttons */}
      <ThemeProvider theme={customTheme}>
        <div className="flex flex-col justify-center sm:flex-row w-full max-w-md md:max-w-lg">
          {/* Explicit buttons for full control */}
          <Button
            color={category === "rosse" ? "primary" : "secondary"}
            size="lg"
            onClick={() => setCategory("rosse")}
            className="border-none ring-0 focus:ring-0 w-full sm:w-auto
                       md:rounded-l-lg md:rounded-r-none rounded-b-none
                       min-w-[140px] md:min-w-[160px]"
          >
            Pizze Rosse
          </Button>

          <Button
            color={category === "bianche" ? "primary" : "secondary"}
            size="lg"
            onClick={() => setCategory("bianche")}
            className="border-none ring-0 focus:ring-0 w-full sm:w-auto
                       rounded-none
                       min-w-[140px] md:min-w-[180px]"
          >
            Pizze Bianche
          </Button>

          <Button
            color={category === "sfiziosita" ? "primary" : "secondary"}
            size="lg"
            onClick={() => setCategory("sfiziosita")}
            className="border-none ring-0 focus:ring-0 w-full sm:w-auto
                       rounded-none
                       min-w-[140px] md:min-w-[160px]"
          >
            Sfiziosità
          </Button>

          <Button
            color={category === "bevande" ? "primary" : "secondary"}
            size="lg"
            onClick={() => setCategory("bevande")}
            className="border-none ring-0 focus:ring-0 w-full sm:w-auto
                       md:rounded-r-lg md:rounded-l-none rounded-t-none
                       min-w-[140px] md:min-w-[160px]"
          >
            Bevande
          </Button>
        </div>
      </ThemeProvider>

      {/* Menu Card */}
      <div className="w-full max-w-2xl bg-white p-6 md:p-10 rounded-2xl shadow-xl mt-6">
        {currentMenu.map((item) => (
          <div key={item.name}>
            <MenuItem
              name={item.name}
              ingredients={item.ingredients}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}