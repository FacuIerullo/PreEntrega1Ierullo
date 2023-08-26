import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { productos } from "./ItemListContainer"
import ItemDetail from "./ItemDetail"


function ItemDetailContainer () {
    const [producto, setProducto] = useState()
    const itemId = useParams()

    useEffect(()=>{
        getProductosById()
        .then(res => {
            setProducto(res)
        })
    }, [])

    console.log(Math.floor(itemId.id))

    const productosId = productos.find(producto => producto.id === (Math.floor(itemId.id)))
    

    const getProductosById = () => {


        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosId)
            }, 2000)
        })
        return pedido
    }

    console.table(productos)
    console.log(producto)


    return(
        <ItemDetail {...producto}/>
    )
}

export default ItemDetailContainer