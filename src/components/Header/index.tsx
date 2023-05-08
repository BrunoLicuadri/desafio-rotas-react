import './styles.css';
import homeIcon from '../../images/home.svg';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export default function Header() {
    return (
        <header>
            <nav className="container nav-content">
                <div className="dflex">
                    <NavLink to="/home" className={ ({isActive}: any)=> isActive ? "nav-active" : "nav-menu"} >
                        <p>Início</p>
                    </NavLink>
                    <NavLink to="/products" className={ ({isActive}: any)=> isActive ? "nav-active" : "nav-menu"} >
                        <p>Produto</p>
                    </NavLink>
                    <NavLink to="/about" className={ ({isActive}: any)=> isActive ? "nav-active" : "nav-menu"} >
                        <p>Sobre Nós</p>
                    </NavLink>
                </div>
                <div>
                    <Link to="/">
                        <img src={homeIcon} alt="Home Page" />
                    </Link>
                </div>

            </nav>

        </header>
    );

}