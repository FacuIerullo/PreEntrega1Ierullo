import { useContext, useEffect, useState } from "react"
import { context } from "./Context"



function ItemCount (producto) {

    const [contador, setContador] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    const { cart } = useContext(context)

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
        const item = {title, price}


        addItem(item, quantity)
    }

    return(
        <div className="contador">
            <button disabled={contador >= 20} className="btn-camisetas btn btn-primary btn-sm" onClick={aumentar}>+</button>
            <span>{contador}</span>
            <button disabled={contador <= 0} className="btn-camisetas btn btn-primary btn-sm" onClick={disminuir}>-</button>
            <button disabled={contador <=0} className="btn-camisetas btn btn-primary btn-sm" onClick={añadirCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default  ItemCount