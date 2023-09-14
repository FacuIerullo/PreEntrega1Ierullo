import ItemCount from "./ItemCount"

function ItemDetail (producto) {

    return(
        <div className="detalle">
            <img className="imagen" src={producto.image} alt={producto.title} />
            <h2 className="titulo">{producto.title}</h2>
            <p className="precio">precio: ${producto.price}</p>
           <p className="descripcion">{producto.description}</p>
           <ItemCount {...producto}/>
        </div>
    )
}

export default ItemDetail