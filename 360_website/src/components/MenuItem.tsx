type Props = {
  name: string
  ingredients: string
  price: number
}

export default function MenuItem({ name, ingredients, price }: Props) {
  return (
    <div className="py-4 border-b">
      <div className="flex justify-between">
        <h3 className="text-xl font-semibold">{name}</h3>
        <span className="font-bold">€{price}</span>
      </div>

      <p className="text-gray-600 text-sm">
        {ingredients}
      </p>
    </div>
  )
}