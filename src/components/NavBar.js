import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

function NavBar(){
    return(
      <nav className="navbar bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Clothes Store</Link>

        <div>
          <NavLink to="/category/remeras" className="btn-camisetas btn btn-dark btn-sm">Remeras</NavLink>
          <NavLink to="/category/abrigos" className="btn-shorts btn btn-dark btn-sm">Abrigos</NavLink>
        </div>
        <CartWidget />

      </div>
    </nav>
    )
}

export default NavBar