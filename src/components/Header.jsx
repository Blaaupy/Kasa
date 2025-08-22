import { Link } from "react-router-dom";
import logo from "../images/Logo_Header.png";
import "./Header.scss";
import "../styles/main.scss"

export function Header() {
    return (
        <header>
            <div className="page containerHeader">
                <img src={logo} alt="Logo de l'agence immoblière Kasa"></img>
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/about">À propos</Link>
                </nav>
            </div>
        </header>
    )
}