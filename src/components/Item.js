import { Link } from "react-router-dom"

function Item(props) {
    return (
        <section className="container text-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
            {props.data.lenght == 0
            ? <p>cargando</p>
            : props.data.map((item,i)=>{
                return (
                    <article key={i} className="card"> 
                    <h2>{item.title} - ${item.price}</h2>
                    <img src={item.image} alt= {item.title}/>
                    <Link className="btn-camisetas btn btn-primary btn-sm" to={`/item/${item.id}`} >Ver detalles</Link>
                    </article>
                )
            })}
        </section>
    )
}

export default Item