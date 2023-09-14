import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { context } from "./Context"

function CartWidget(){

    const { cantidadTotal } = useContext(context)

    return(
        <NavLink className="boton btn-camisetas btn btn-dark btn-sm" to="/carrito">
            <i className="material-icons">shopping_cart</i>
            <span>{cantidadTotal}</span>
        </NavLink>
    )
}

export default CartWidget