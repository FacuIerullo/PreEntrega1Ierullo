import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

function NavBar(){
    return(
      <nav className="navbar bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Fútbol Dinámico</Link>

        <div>
          <NavLink to="/category/remeras" className="btn-camisetas btn btn-primary btn-sm">Remeras</NavLink>
          <NavLink to="/category/abrigos" className="btn-shorts btn btn-primary btn-sm">Abrigos</NavLink>
        </div>
        <CartWidget />

      </div>
    </nav>
    )
}

export default NavBar