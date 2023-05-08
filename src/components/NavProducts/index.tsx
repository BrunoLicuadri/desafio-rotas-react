import './styles.css';
import QueryLink from '../QueryLink';


export default function NavProducts() {
    return (
        <nav className="container">
            <div className="nav-prod">
                <QueryLink to="/computers" className={({ isActive }: any) => isActive ? "nav-prod-active" : "nav-prod-menu"}>
                    Computadores
                </QueryLink>
                <QueryLink to="/eletronics" className={({ isActive }: any) => isActive ? "nav-prod-active" : "nav-prod-menu"}>
                    Eletrônicos
                </QueryLink>
                <QueryLink className={({ isActive }: any) => isActive ? "nav-prod-active" : "nav-prod-menu"} to="/books">
                    Livros
                </QueryLink>
            </div>
        </nav>
    )
}