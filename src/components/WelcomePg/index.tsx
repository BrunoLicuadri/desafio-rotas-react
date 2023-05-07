import './styles.css';
import france from '../../images/France.png';
import brazil from '../../images/brazil_flag.png';
import germany from'../../images/germany_flags.png';
import italy from '../../images/italy_flags.png';
import spain from '../../images/spain_flags.png';
import usa from '../../images/usa_flags.png';

export default function WelcomePg(){
    return (
        <main className="container">
            <div className="dflex">
                <h1 className="wlcm-text">Bem-vindos!</h1>
                <div className="flag-container">
                    <img className="flag-icon" src={brazil} alt="brazil-flag" />
                </div>
                
            </div>

            <div className="dflex">
                <h1 className="wlcm-text">Bienvenido!</h1>
                <div className="flag-container">
                    <img className="flag-icon" src={spain} alt="spain-flag" />
                </div>
            </div>

            <div className="dflex">
                <h1 className="wlcm-text">Welcome!</h1>
                <div className="flag-container">
                    <img className="flag-icon" src={usa} alt="usa-flag" />
                </div>
            </div>

            <div className="dflex">
                <h1 className="wlcm-text">Herzlich Willkommen!</h1>
                <div className="flag-container">
                    <img className="flag-icon" src={germany} alt="germany-flag" />
                </div>
            </div>

            <div className="dflex">
                <h1 className="wlcm-text">Bienvenue!</h1>
                <div className="flag-container">
                    <img className="flag-icon" src={france} alt="france-flag" />
                </div>
            </div>

            <div className="dflex">
                <h1 className="wlcm-text">Bienvenuto!</h1>
                <div className="flag-container">
                    <img className="flag-icon" src={italy} alt="italy-flag" />
                </div>
            </div>
            
        </main>

    );
}