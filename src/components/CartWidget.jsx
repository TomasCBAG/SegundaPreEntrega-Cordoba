import carrito from "../assets/img/carrito.svg"

const CartWidget = () => {
  return (<><div className='flex'>
    <img className='text-white' src={carrito} alt="carrito" /> 
    <span className='text-white'>(19)</span>
  </div></>);
}

export default CartWidget;