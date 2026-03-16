import logo380 from '/380_logo.svg'


function Navbar() {
    return (
        <div className='flex items-center justify-center bg-white'>
            <img src={logo380} alt='logo pizzeria 380' className='size-70'></img>
            <h1 className='font-semibold text-8xl'>Pizzeria d'Asporto</h1>
        </div>
    )
}

export default Navbar