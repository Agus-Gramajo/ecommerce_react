const ItemCount = ({ stock, initial,  onAdd}) => {
    // contador es un estado Interno
  ​
    const Sumar = () => {
      // estado interno + 1
    }
  ​
    const Restar = () => {
      // estado interno - 1
    }
  ​
    return(
      <>
      <button type="button" className="btn btn-primary" onClick={() => Sumar} >+</button>
      <h1>contador</h1>
      <button type="button" className="btn btn-primary" onClick={() => Restar} >-</button>
      <button type="button" className="btn btn-primary" onClick={() => {}} >Agregar al carrito</button>
      </>
    )
  }
  ​
  export default ItemCount;