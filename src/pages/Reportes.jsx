import '../styles/Reportes.css';
import CHeader from '../componentes/Header.jsx';
import AppNav from '../componentes/AppNav';
import Footer from '../componentes/Footer';

function Reportes() {
    const initialStateNav = [
        {
            id: "titan",
            nombre: "Titan",
            url: "/reportes"
        },
        {
            id: "unicentro",
            nombre: "Unicentro",
            url: "/reportes"
        },
        {
            id: "plazacentral",
            nombre: "Plaza Central",
            url: "/reportes"
        },
        {
            id: "granestacion",
            nombre: "Gran estacion",
            url: "/reportes"
        },
        {
            id: "embajador",
            nombre: "Embajador Centro",
            url: "/reportes"
        },
        {
            id: "americas",
            nombre: "Las Américas",
            url: "/reportes"
        }
    ]
    return (
        <div className="App">
            <CHeader/>
            <main className="App-main">
                <div className="divReporte">
                    <h1 className="titleReporte">Reporte de operaciones mensuales</h1>
                    <p><b>Id reporte: </b>1</p>
                    <p><b>Periodo inicio de reporte: </b>01/03/2022</p>
                    <p><b>Periodo fin de reporte: </b>31/03/2022</p>
                    <p><b>Multiplex: </b>Unicentro</p>
                    <p><b>Datos estadisticos: </b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                    of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
                    versions of Lorem Ipsum.</p>
                </div>
            </main>
            <AppNav pages={initialStateNav}/>
            <footer className='App-footer'>
                <Footer/>
            </footer>
        </div>
    );
}

export default Reportes;
