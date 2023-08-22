import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";


function Main () {
    return(
        <>
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer />}/>
                <Route path="/category/:id" element={<ItemListContainer />}/>
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<p>Carrito</p>} />
            </Routes>
        </main>
        </>
    )
}

export default Main