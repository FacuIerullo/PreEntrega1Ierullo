import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { db } from "../db/firebase"
import { collection, getDoc, doc } from "firebase/firestore"



function ItemDetailContainer () {
    const [producto, setProducto] = useState()
    const itemId = useParams()

    useEffect(()=>{

        const productosCollection = collection(db, "productos")

        const referenciaDelDoc = doc(productosCollection, itemId.id)

        const consulta = getDoc(referenciaDelDoc)

        consulta
        .then((res)=>{{
            setProducto(res.data())
        }})

    }, [])


    return(
        <ItemDetail {...producto}/>
    )
}

export default ItemDetailContainer