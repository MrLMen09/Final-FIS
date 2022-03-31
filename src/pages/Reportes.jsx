import '../styles/Reportes.css';
import Tarjeta from '../tarjeta/Tarjeta';
import CHeader from './Header.jsx';

function Reportes() {
    return (
        <div className="App">
            <CHeader/>
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

export default Reportes;
