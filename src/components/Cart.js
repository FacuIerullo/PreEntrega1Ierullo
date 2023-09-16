import { useContext } from "react"
import { context } from "./Context"
import { Link } from "react-router-dom"

function Cart () {

    const { cart, montoTotal, removeItem, clearCart} =  useContext(context)

        
    return(
        <section className="carrito">
       {cart.map((item, i)=>{
        return (
            <article className="item" key={i}>
                <img className="imagen" src={item.image} alt={item.title} />
                <h2 className="titulo">{item.title}</h2>
                <span className="precio">precio: ${item.price}</span>
                <span className="cantidad">cantidad: {item.quantity}</span>
                <button onClick={removeItem} className="boton btn-camisetas btn btn-dark btn-sm">X</button>   
            </article>
        )
       })}
       {cart.length == 0 
       ? <p>No hay productos</p>
       :<>
       <span className="total">total: ${montoTotal}</span>
       <div>
       <Link className="btn-camisetas btn btn-dark btn-sm" to={"/checkout"}>Finalizar compra</Link>
       </div>
       <button className="mt-2 btn-camisetas btn btn-dark btn-sm" onClick={clearCart}>Limpiar carrito</button>
       </>}
       </section>
    )

}
export default Cart 