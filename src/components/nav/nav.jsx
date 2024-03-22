import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp';
import './nav.css';

function Nav() {
    
    return (
        <nav>
            <Link to ="/">
                <img src={logo} alt="logo" />
            </Link>

            <ul>
                <li>
                    <Link to ="/">Accueil</Link>
                </li>

                <li>
                    <Link to="/about">A propos</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
