import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget'

function Header(){
    return(
        <header>
            <NavBar />
            <CartWidget />
        </header>
    )
}

export default Header