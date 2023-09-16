import { useState } from "react"
import ItemCount from "./ItemCount"
import { useEffect } from "react"
import { toast } from 'sonner';

function ItemDetail (producto) {

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 2000)

        
    }, [])
    
    if(loading) return toast.promise(() => new Promise((resolve) => setTimeout(resolve, 2000)), {
        loading: 'Loading',
        success: 'Success',
        error: 'Error',
      });



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