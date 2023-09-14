import { useContext } from "react"
import { context } from "./Context"

function Carrito () {

    const { cart, montoTotal } =  useContext(context)
     
    
    return(
        <section className="carrito">
       {cart.map((item, i)=>{
        return (
            <article className="item" key={i}>
                <img className="imagen" src={item.image} alt={item.title} />
                <h2 className="titulo">{item.title}</h2>
                <span className="precio">precio: ${item.price}</span>
                <span className="cantidad">cantidad: {item.quantity}</span>
                <button className="boton btn-camisetas btn btn-dark btn-sm">X</button>   
            </article>
        )
       })}
       <span className="total">total: ${montoTotal}</span>
       <div>
       <button className="btn-camisetas btn btn-dark btn-sm">Finalizar compra</button>
       </div>
       </section>
    )

}
export default Carrito