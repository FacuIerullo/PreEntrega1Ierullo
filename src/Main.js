import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import CheckoutFinal from "./components/CheckoutFinal";


function Main () {
    return(
        <>
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer />}/>
                <Route path="/category/:id" element={<ItemListContainer />}/>
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/compraconfirmada" element={<CheckoutFinal />} />
            </Routes>
        </main>
        </>
    )
}

export default Main