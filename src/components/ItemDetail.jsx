import ItemCount from "./ItemCount";

export const ItemDetail = ({ item }) => {


  const handleAdd = () => {
    console.log('agregar al carrito')
  }

  return (<>
  <div className="flex w-60 h-80 justify-evenly">
    <div className="mx-auto my-auto bg-zinc-900 w-96 h-96 text-center justify-items-center  ">
      <div className="w-40 h-40 text-center mx-10 my-4">
        <img src={item.imagen} className="w-40 h-40 text-center" />

      </div>
      <h2 className="text-white">{item.nombre}</h2>
      <h3 className="text-white">${item.precio}</h3>
      <h4 className="text-white my-2">Descripcion: {item.descripcion}</h4>

       <div>
         <ItemCount stock={item.stock} initial={0} onAdd={handleAdd} />
        </div> 
    </div>

  </div>
  </>);

}