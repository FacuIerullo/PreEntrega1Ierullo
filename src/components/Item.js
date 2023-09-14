import { Link } from "react-router-dom"

function Item(props) {
    return (
        <section className="container-fluid text-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 ">
            {props.data.lenght == 0
            ? <p>cargando</p>
            : props.data.map((item,i)=>{
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