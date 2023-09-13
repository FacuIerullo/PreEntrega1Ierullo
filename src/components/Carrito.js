import { useContext } from "react"
import { context } from "./Context"

function Carrito () {

    const props =  useContext(context)
    
    return(
        console.log(props.carrito)
    )

}
export default Carrito