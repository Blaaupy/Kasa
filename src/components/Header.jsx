import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <img src="../images/Logo.png" alt="Logo de l'agence immoblière Kasa"></img>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </>
        
    )
}