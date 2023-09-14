import { useContext } from "react"
import { context } from "./Context"

function Carrito () {

    const { cart } =  useContext(context)
     
    
    return(
       cart.map((item, i)=>{
        return (
            <article key={i}>
                <div>{item.title}</div>
                <span>${item.price}</span>
                <div>
                <span>{item.quantity}</span>
                </div>
            </article>
        )
       })
    )

}
export default Carrito