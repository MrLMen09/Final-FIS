import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import './AppNav.css';

function AppNav(props) {
    const pagesNav = props.pages;
    return (
        < nav className="App-nav" >
            {pagesNav.map((page) => (
                <div key={page.id}>
                    <NavLink to={page.url} className="links"><p className='menu' id={page.id}>{page.nombre}</p></NavLink>
                </div>
            ))}
        </nav >
    );
}

export default AppNav;
