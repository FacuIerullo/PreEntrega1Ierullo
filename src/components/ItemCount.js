import { useContext, useEffect, useState } from "react"
import { context } from "./Context"



function ItemCount (producto) {

    const [contador, setContador] = useState(0)

    const [data, setData] = useState()

    const props =  useContext(context)

    useEffect(()=>{
        getData(setData)
    },[data])

    const getData = () => {
        setTimeout(()=>{
            let data = producto
            setData(data)
        }, 3000)
    }

    const disminuir = () => {
        setContador(contador - 1)
    }

    const aumentar = () => {
        setContador(contador + 1)
    }

    const añadirCarrito = () => {
        props.carrito.push([{"title": data.title, "price": data.price, "quantity": contador}])
        console.log(props.carrito)
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