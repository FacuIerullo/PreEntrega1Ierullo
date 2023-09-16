import { useContext, useState } from "react"
import { context } from "./Context"



function ItemCount (producto) {

    const [contador, setContador] = useState(0)

    const { addItem } =  useContext(context)

    const disminuir = () => {
        setContador(contador - 1)
    }

    const aumentar = () => {
        setContador(contador + 1)
    }

    const añadirCarrito = () => {

        const quantity = contador
        const title = producto.title
        const price = producto.price
        const image = producto.image
        const item = {title, price, image}


        addItem(item, quantity)
    }

    return(
        <div className="contador">
            <button disabled={contador >= 20} className="btn-camisetas btn btn-dark btn-sm" onClick={aumentar}>+</button>
            <span className="p-2 fs-5">{contador}</span>
            <button disabled={contador <= 0} className="btn-camisetas btn btn-dark btn-sm" onClick={disminuir}>-</button>
            <button disabled={contador <=0} className="ms-2 btn-camisetas btn btn-dark btn-sm" onClick={añadirCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default  ItemCount