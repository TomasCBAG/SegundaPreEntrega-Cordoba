import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial)

  const handleCountChange = (value) => {
    const newCount = count + value;
    if (newCount >= 1 && newCount <= stock) {
      setCount(newCount)
    }
  }

  const handleAdd = () => {
    if (count > 0) {
      onAdd(count)
    }

  }


  return (
  <>
  
  <div>
    <button className="text-black bg-white w-10 text-1xl " onClick={() => handleCountChange(-1)}>
      -
    </button>
    <button className="text-black bg-white w-10 text-1xl "onClick={() => handleCountChange(+1)}>
      +
    </button>
      
    </div>
      <div>
    <button className="text-black bg-white w-40 text-1xl " onClick={() => handleAdd()}>
      Agregar al carrito
    </button>
  </div>
  
  </>);
}

export default ItemCount;