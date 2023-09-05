import { createContext } from "react"

export const context = createContext()
    const Provider = context.Provider
const CustomProvider = (props) => {
    const valorContexto = {
        carrito: [],
        montoTotal: 0,
        cantidadTotal: 10,
    }
    return(
        <Provider value={valorContexto}>
            {props.children}
        </Provider>
    )
}
export default CustomProvider