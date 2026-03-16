export type Pizza = {
  name: string
  ingredients?: string
  price: string
}

export const menu: { rosse: Pizza[]; bianche: Pizza[]; sfiziosita: Pizza[]; bevande: Pizza[] } = {
  rosse: [
      {
        name: "Margherita",
        ingredients: "pomodoro, mozzarella",
        price: "5.50"
      },
      {
        name: "Napoli",
        ingredients: "pomodoro, mozzarella, acciughe",
        price: "6.50"
      },
      {
        name: "Romana",
        ingredients: "pomodoro, mozzarella, acciughe, olive, capperi",
        price: "7.50"
      },
      {
        name: "Siciliana",
        ingredients: "pomodoro, capperi, acciughe, olive",
        price: "7.00"
      },
      {
        name: "Prosciutto",
        ingredients: "pomodoro, mozzarella, prosciutto cotto",
        price: "6.50"
      },
      {
        name: "Valdostana",
        ingredients: "pomodoro, mozzarella, prosciutto cotto, fontina",
        price: "7.50"
      },
      {
        name: "Bismark",
        ingredients: "pomodoro, mozzarella, prosciutto cotto, uovo",
        price: "7.50"
      },
      {
        name: "Salsiccia",
        ingredients: "pomodoro, mozzarella, salsiccia",
        price: "7.00"
      },
      {
        name: "Diavola",
        ingredients: "pomodoro, mozzarella, salamino piccante",
        price: "6.50"
      },
      {
        name: "Wurstel",
        ingredients: "pomodoro, mozzarella, wurstel",
        price: "6.50"
      },
      {
        name: "Patatosa",
        ingredients: "pomodoro, mozzarella, patatine fritte",
        price: "6.50"
      },
      {
        name: "Tedesca",
        ingredients: "pomodoro, mozzarella, wurstel, patatine fritte",
        price: "7.00"
      },
      {
        name: "Parma",
        ingredients: "pomodoro, mozzarella, prosciutto crudo",
        price: "7.50"
      },
      {
        name: "Quattro Stagioni",
        ingredients: "pomodoro, mozzarella, prosciutto cotto, funchi, olive, carciofi",
        price: "8.50"
      },
      {
        name: "Quattro Formaggi",
        ingredients: "pomodoro, mozzarella, gorgonzola, fontina, pecorino",
        price: "9.00"
      },
      {
        name: "Capricciosa",
        ingredients: "pomodoro, mozzarella, prosciutto, funghi, carciofi, olive, salamino piccante",
        price: "9.00"
      },
      {
        name: "Parmigiana",
        ingredients: "pomodoro, mozzarella, melanzane, prosciutto cotto, formaggio grattugiato",
        price: "8.00"
      },
      {
        name: "Ortolana",
        ingredients: "pomodoro, mozzarella, verdure grigliate",
        price: "8.00"
      },
      {
        name: "Tonnata",
        ingredients: "pomodoro, mozzarella, tonno, cipolla",
        price: "8.00"
      },
      {
        name: "Bufala",
        ingredients: "pomodoro, mozzarella di bufala",
        price: "8.00"
      },
      {
        name: "Boscaiola",
        ingredients: "pomodoro, mozzarella, funghi, salsiccia, scaglie di grana",
        price: "9.00"
      },
      {
        name: "Carmagnolese",
        ingredients: "pomodoro, mozzarella, peperoni, salsiccia",
        price: "7.50"
      },
      {
        name: "Calabria",
        ingredients: "pomodoro, mozzarella, 'nduja, schiacciata calabra, cipolla di Tropea",
        price: "9.00"
      },
      {
        name: "Toni (doppio impasto)",
        ingredients: "pomodoro, mozzarella, salsiccia, salamino piccante, 'nduja",
        price: "12.00"
      },
  ],
  bianche: [
      {
        name: "La Pistacchiosa",
        ingredients: "pesto di pistacchio, mozzarella, mortadella, granella di pistacchio, burrata",
        price: "11.00"
      },
      {
        name: "Salsiccia e Friarielli",
        ingredients: "mozzarella, salsiccia, friarielli",
        price: "8.50"
      },
      {
        name: "Gorgo e Pere",
        ingredients: "mozzarella, gorgonzola, pere",
        price: "8.00"
      },
      {
        name: "Speck e Brie",
        ingredients: "mozzarella, speck, brie",
        price: "8.00"
      },
      {
        name: "Primavera",
        ingredients: "mozzarella, stracchino, pomodoro fresco, rucola",
        price: "8.00"
      },
      {
        name: "Bresaola",
        ingredients: "mozzarella, pomodoro fresco, bresaola, scaglie di grana, rucola",
        price: "7.50"
      },
      {
        name: "Zucchine e Gamberi",
        ingredients: "mozzarella, zucchine grigliate, gamberi, panna",
        price: "9.00"
      },
      {
        name: "Carbonara",
        ingredients: "mozzarella, pancetta, uovo, pecorino",
        price: "9.00"
      },
      {
        name: "Gorgo e Noci",
        ingredients: "mozzarella, gorgonzola, noci",
        price: "9.00"
      },
      {
        name: "Gustosa",
        ingredients: "mozzarella, pancetta, scamorza",
        price: "8.00"
      },
      {
        name: "Sfiziosa",
        ingredients: "mozzarella, salmone, pomodorino giallo, stracciatella, granella di pistacchio",
        price: "12.00"
      },
  ],
  sfiziosita: [
      {
        name: "Farinata",
        price: "da 4.00",
      },
      {
        name: "Focaccia Salata",
        price: "da 4.00",
      },
      {
        name: "Focaccia Dolce",
        price: "6.00",
        ingredients: "nutella o pistacchio"
      },
      {
        name: "Chiacchiere Dolci",
        price: "6.00",
        ingredients: "nutella o pistacchio"
      },
      {
        name: "Chiacchiere Salate",
        price: "da 5.00",
        ingredients: "con affettato a scelta"
      },
      {
        name: "Patatine Fritte",
        price: "3.00",
      },
      {
        name: "Arancino Ragù / Prosciutto e Mozzarella",
        price: "3.50",
      }
  ],
  bevande: [
      {
        name: "Bibite in Lattina",
        price: "2.50",
        ingredients: "Coca Cola, Coca Cola Zero, Fanta, Sprite, Thè"
      },
      {
        name: "Birre",
        price: "3.50",
        ingredients: "Tennent's, Corona, Ceres 33cl"
      },
      {
        name: "Birre ",
        price: "3.00",
        ingredients: "Moretti, Beck's 33cl"
      },
            {
        name: "Acqua 0,5Lt",
        price: "1.50",
      },
  ]
}
