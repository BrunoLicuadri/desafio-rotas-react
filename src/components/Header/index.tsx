import './styles.css';
import homeIcon from '../../images/home.svg';


export default function Header() {
    return (
        <header>
            <nav className="container nav-content">
                <div className="dflex">
                    <p className="nav-menu">Início</p>
                    <p className="nav-menu">Produto</p>
                    <p className="nav-menu">Sobre Nós</p>
                </div>
                <div>
                    <img src={homeIcon} alt="Home Page" />
                </div>

            </nav>

        </header>
    );

}