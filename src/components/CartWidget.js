import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { context } from "./Context"

function CartWidget(){

    const valorContexto = useContext(context)

    return(
        <NavLink to="/carrito">
            <i className="material-icons">shopping_cart</i>
            <span>{valorContexto.cantidadTotal}</span>
        </NavLink>
    )
}

export default CartWidget