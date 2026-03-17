import logo380 from '/380_logo.svg'

function Navbar() {
  return (
    <div className="w-full bg-white shadow-xl">
      
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-center md:justify-centern gap-1 md:gap-8">

        {/* Logo */}
        <img
          src={logo380}
          alt="logo pizzeria 380"
          className="w-[clamp(70px,24vw,140px)] object-contain"
        />

        {/* Title */}
        <div className="text-center md:text-left max-w-[70%]">
            <h1 className="font-serif text-[clamp(1.4rem,4.5vw,2.8rem)] tracking-wide text-gray-800">
                Pizzeria d'Asporto
            </h1>
            <p className="text-sm md:text-base text-gray-500 leading-snug">
                Il sapore della tradizione italiana, direttamente a casa tua!
            </p>
        </div>

      </div>
    </div>
  )
}

export default Navbar