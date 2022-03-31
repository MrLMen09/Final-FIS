import '../styles/SalaCine.css';

function SalaCine() {
    return (
        <div className="App">
            <header className="App-header">
                <div id="h-principal">
                    <img
                        id="logo"
                        src="../media/logo.png"
                    />
                    <h1 id="titulo">Cine Jungla</h1>
                </div>
                <div id="botones-header">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">Navbar</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Link</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled">Disabled</a>
                                    </li>
                                </ul>
                                <form class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                    {/*<img src="../media/carritoBlanco.png" alt="" id="carrito" />
                    <img src="../media/personaIconoBlanco.png" alt="" id="usuario" />*/}
                </div>
            </header>
            <main className="App-main">
                <div className="divReporte">
                    <h1 className="titleReporte">Reporte de operaciones mensuales</h1>
                    <p><b>Id reporte: </b>1</p>
                    <p><b>Periodo de reporte: </b>01/03/2022 a 31/03/2022</p>
                    <p><b>Multiplex: </b>Unicentro</p>

                    <p><b>Datos estadisticos: </b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                    of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
                    versions of Lorem Ipsum.</p>
                </div>
            </main>
            <nav className="App-nav">
                <p className='' id="peliculas">MULTIPLEX's</p>
                <p className='menu' id="peliculas">Titan</p>
                <p className='menu' id="peliculas">Unicentro</p>
                <p className='menu' id="peliculas">Plaza Central</p>
                <p className='menu' id="peliculas">Gran Estación</p>
                <p className='menu' id="peliculas">Embajador (Centro)</p>
                <p className='menu' id="peliculas">Las Américas</p>
            </nav>
            <footer className="App-footer">

            </footer>
        </div>
    );
}

export default SalaCine;
