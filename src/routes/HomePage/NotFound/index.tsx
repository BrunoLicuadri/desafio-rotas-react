import './styles.css';
import lostImg from "../../../images/lost.png";

export default function NotFound() {
    return (
        <main>
            <div className="container dflex content-container">
                <div className="text-content">
                    <h2>Não Encontrado!</h2>
                    <p>Are you lost son? </p>
                </div>
                <div >
                    <img className="directions" src={lostImg} alt="Image-page-not-found" />
                </div>
            </div>
        </main>

    );
}