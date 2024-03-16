import { useState } from "react";
import CartWidget from "./CartWidget";
import icono from "../assets/img/159294.svg"

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);



  return (<nav className="bg-black py-4">
    <div className=" flex mr-20 ml-10">
     <img src= {icono} alt="montaña" />

      <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-white text-2xl font-serif">Northern Mountain</h1>
        <div className="ml-20 flex items-center justify-end">
          <ul className="flex space-x-4 justify-end">
            <li>
              <button className="text-white text-xl" href="" onClick={() => setShowCategories(!showCategories)}>Categorías</button>
              {showCategories && (
                <ul className="absolute bg-white text-xl w-[20%]">
                  <li>
                    <button className="hover:underline">
                      Categoría 1

                    </button>
                  </li>
                  <li>
                    <button className="hover:underline">
                      Categoría 2

                    </button>
                  </li>
                  <li>
                    <button className="hover:underline">
                      Categoría 3

                    </button>

                  </li>
                </ul>)}

            </li>
            <li><button className="text-white text-xl">Productos</button></li>
            <li><button className="text-white text-xl">Contacto</button></li>
            <li>

              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>);
}

export default Navbar;