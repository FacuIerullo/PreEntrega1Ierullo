import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "sonner"

function Item(props) {
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

    return (
        <section className="container-fluid text-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 ">
            { props.data.map((item,i)=>{
                return (
                    <article key={i} className="card"> 
                    <img className="imagen" src={item.image} alt= {item.title}/>
                    <h2 className="titulo">{item.title}</h2>
                    <span className="precio"> ${item.price}</span>
                    <Link className="boton btn-camisetas btn btn-dark btn-sm" to={`/item/${item.id}`} >Ver detalles</Link>
                    </article>
                )
            })}
        </section>
    )
}

export default Item