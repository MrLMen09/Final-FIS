import '../styles/SalaCine.css';
import CHeader from '../componentes/Header.jsx';
import ImgSalaCine from '../media/SalaCine.png';

function SalaCine() {
    return (
        <div className="App">
            <CHeader />
            <main className="App-main">
                <div className="salaCine">
                    <div className="titles">
                        <h1 className="titleSala">Sala: 1</h1>
                        <h2 className="titlePelicula">Pelicula: Batman</h2>
                    </div>
                    <div className="containerImg">
                        <img src={ImgSalaCine} alt="DistribucionSillas" className="ImgSalaCine" />
                    </div>
                    <div className="compraSillas">
                        <form action="" target="_blank">
                            <p>Selecciona tus sillas:</p>
                            <SelectSillas/>
                            <p><input type="submit" value="Enviar" /></p>
                        </form>
                    </div>
                </div>
            </main>
            <nav className="App-nav">

            </nav>
            <footer className="App-footer">

            </footer>
        </div>
    );
}

function SelectSillas() {
    return (
        <select className="sillas" name="sillas[]" size="10" multiple required>
            <option disabled>Fila A</option>
            <option value="1A">1</option>
            <option value="2A">2</option>
            <option value="3A">3</option>
            <option value="4A">4</option>
            <option value="5A">5</option>
            <option value="6A">6</option>
            <option value="7A">7</option>
            <option value="8A">8</option>
            <option value="9A">9</option>
            <option value="10A">10</option>
            <option disabled>Fila B</option>
            <option value="1B">1</option>
            <option value="2B">2</option>
            <option value="3B">3</option>
            <option value="4B">4</option>
            <option value="5B">5</option>
            <option value="6B">6</option>
            <option value="7B">7</option>
            <option value="8B">8</option>
            <option value="9B">9</option>
            <option value="10B">10</option>
            <option disabled>Fila C</option>
            <option value="1C">1</option>
            <option value="2C">2</option>
            <option value="3C">3</option>
            <option value="4C">4</option>
            <option value="5C">5</option>
            <option value="6C">6</option>
            <option value="7C">7</option>
            <option value="8C">8</option>
            <option value="9C">9</option>
            <option value="10C">10</option>
            <option disabled>Fila D</option>
            <option value="1D">1</option>
            <option value="2D">2</option>
            <option value="3D">3</option>
            <option value="4D">4</option>
            <option value="5D">5</option>
            <option value="6D">6</option>
            <option value="7D">7</option>
            <option value="8D">8</option>
            <option value="9D">9</option>
            <option value="10D">10</option>
            <option disabled>--Preferencial--</option>
            <option disabled>Fila E</option>
            <option value="1E">1</option>
            <option value="2E">2</option>
            <option value="3E">3</option>
            <option value="4E">4</option>
            <option value="5E">5</option>
            <option value="6E">6</option>
            <option value="7E">7</option>
            <option value="8E">8</option>
            <option value="9E">9</option>
            <option value="10E">10</option>
            <option disabled>Fila F</option>
            <option value="1F">1</option>
            <option value="2F">2</option>
            <option value="3F">3</option>
            <option value="4F">4</option>
            <option value="5F">5</option>
            <option value="6F">6</option>
            <option value="7F">7</option>
            <option value="8F">8</option>
            <option value="9F">9</option>
            <option value="10F">10</option>
        </select>
    )
}

export default SalaCine;
