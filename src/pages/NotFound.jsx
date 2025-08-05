import { Link } from "react-router-dom";
import "./NotFound.scss"

export default function NotFoundPage() {
  return (
  <>
    <p className="p404">404</p>
    <h1 className="notFoundTitle">Oups! La page que vous demandez n'existe pas.</h1>
    <div className="linkToHomePage">
      <Link to="/">Retourner sur la page d'Accueil</Link>
    </div>
    
  </>);
}