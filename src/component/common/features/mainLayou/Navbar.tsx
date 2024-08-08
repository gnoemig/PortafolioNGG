

const Navbar = () => {

    const overhed = "hover:bg-[#127ef9ff] hover:text-black cursor-pointer"
  return (
   <ul className="flex lg:flex-col justify-center gap-5 p-2  bg-success">
    <li className={overhed}>Ejercicio 1</li>
    <li className={overhed}>Ejercicio 2</li>
    <li className={overhed}>Ejercicio 3</li>
    <li className={overhed}>Ejercicio 4</li>
    <li className={overhed}>Ejercicio 5</li>
   </ul>
  )
}

export default Navbar