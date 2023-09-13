import ItemCount from "./ItemCount"

function ItemDetail (producto) {

    return(
        <div>
            <h2>{producto.title}</h2>
            <img src={producto.image} alt={producto.title} />
            <p>precio: ${producto.price}</p>
           <p>{producto.description}</p>
           <ItemCount {...producto}/>
        </div>
    )
}

export default ItemDetail