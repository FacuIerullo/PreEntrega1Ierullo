import { createContext } from "react"

export const context = createContext()
    const Provider = context.Provider

const CustomProvider = (props) => {
    const valorContexto = {
        carrito: [],
        cantidadTotal: 0,
    }
    return(
        <Provider value={valorContexto}>
            {props.children}
        </Provider>
    )
}
export default CustomProvider