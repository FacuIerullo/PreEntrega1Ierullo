function ItemDetail (producto) {
    console.log(producto)
    return(
        <div>
            <h2>{producto.title}</h2>
            <img src={producto.image} alt={producto.title} />
            <p>precio: ${producto.price}</p>
           <p>{producto.description}</p>
        </div>
    )
}

export default ItemDetail