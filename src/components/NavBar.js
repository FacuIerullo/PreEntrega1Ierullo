function NavBar(){
    return(
        <>
        <nav class="navbar bg-primary" data-bs-theme="dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="index.html">Fútbol Dinámico</a>

              <div class="secciones">
                <button type="button" class="btn-todo btn btn-primary btn-sm">Todo</button>
                <button type="button" class="btn-camisetas btn btn-primary btn-sm">Camisetas</button>
                <button type="button" class="btn-shorts btn btn-primary btn-sm">Shorts</button>
                <button type="button" class="btn-camperas btn btn-primary btn-sm">Camperas</button>
              </div>

            </div>
        </nav>
        </>
    )
}

export default NavBar