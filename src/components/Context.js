import { createContext } from "react"

const CustomProvider = (props) => {
    
    const contexto = createContext()
    const Provider = contexto.Provider
    return(
        <Provider value={{}}>
            {props.children}
        </Provider>
    )
}
export default CustomProvider