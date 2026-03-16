type Props = {
  name: string
  ingredients?: string
  price: string
}

export default function MenuItem({ name, ingredients, price }: Props) {
  return (
    <div className="py-4 border-b border-gray-200 last:border-none">
      <div className="flex justify-between">
        <h3 className="text-xl text-[#b5855a] font-semibold">{name}</h3>
        <div className="flex-grow border-t border-dotted border-[#b5855a] mx-3 mt-5"></div>
        <span className="font-bold text-[#b5855a]">{price} €</span>
      </div>

      <p className="text-gray-600 text-sm">
        {ingredients}
      </p>
    </div>
  )
}