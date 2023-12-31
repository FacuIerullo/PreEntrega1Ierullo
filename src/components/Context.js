import { createContext, useEffect, useState } from "react"

export const context = createContext()
    const Provider = context.Provider

const CustomProvider = (props) => {

    const [cart, setCart] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [montoTotal, setMontoTotal] = useState(0)

    useEffect(()=>{
        getTotal()
        .then((res)=>{
            setCantidadTotal(res)
        })

        getPrice()
        .then((res)=>{
            setMontoTotal(res)
        })
    })

    const addItem = (item, quantity) => {
      if (!isInCart(item.title)) {
        setCart(prev => [...prev, {...item, quantity}])
      } else {
        console.log("producto agregado")
      }
    }

    const isInCart = (itemTitle) => {
        return cart.some(prod => prod.title === itemTitle)
    }

    const totalCart = cart.reduce((accumulator, actual)=> accumulator + actual.quantity, 0) 
    
    const getTotal = () =>{
        const pedido = new Promise((res,rej) => {
            setTimeout(()=>{
                res(totalCart)
            },500)
        })
        return pedido
    }

    const totalPrice = cart.reduce((accumulator, actual) => accumulator + (actual.price * actual.quantity), 0)

    const getPrice = () =>{
        const pedido = new Promise((res,rej) => {
            setTimeout(()=>{
                res(totalPrice)
            }, 500)
        })

        return pedido
    }

    const valorContexto = {
        carrito: cart,
        cantidadTotal: cantidadTotal,
        montoTotal: montoTotal,
    }

    const clearCart = () => {
        setCart([])
    }

    return(
        <Provider value={{valorContexto, addItem, cart, cantidadTotal, montoTotal, clearCart}}>
            {props.children}
        </Provider>
    )
}
export default CustomProvider