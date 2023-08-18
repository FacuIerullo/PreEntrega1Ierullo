import { useEffect, useState } from "react"
import Presentacional from "./Presentacional"

function Container () {

    //estado
    const [data, setData] = useState([])

    //acciones
    const getProductos = () => {

        const resultado_del_fetch = fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setData(json))
            console.log(resultado_del_fetch)
    }

    useEffect(()=>{
        getProductos (setData)
    },[])


    //vista
    return(
        <Presentacional data={data} />
    )
}

export default Container