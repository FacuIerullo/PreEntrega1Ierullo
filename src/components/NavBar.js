import CartWidget from './CartWidget'

function NavBar(){
    return(
      <nav className="navbar bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">Fútbol Dinámico</a>

        <div>
          <button type="button" className="btn-todo btn btn-primary btn-sm">Todo</button>
          <button type="button" className="btn-camisetas btn btn-primary btn-sm">Camisetas</button>
          <button type="button" className="btn-shorts btn btn-primary btn-sm">Shorts</button>
          <button type="button" className="btn-camperas btn btn-primary btn-sm">Camperas</button>
        </div>
        <CartWidget />

      </div>
    </nav>
    )
}

export default NavBar