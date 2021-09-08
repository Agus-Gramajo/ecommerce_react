import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
    <h1>{greeting}</h1>
    <ItemCount />
    </>
  )
}
​
export default ItemListContainer;