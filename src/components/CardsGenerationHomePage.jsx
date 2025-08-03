import logements from "../data/logements.json"
import "./CardsGenerationHomePage.scss"
import "../styles/main.scss"
import { useNavigate } from "react-router-dom"

export function CardsGeneration() {

    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/logement/${id}`);
    }


    return (<section className="container">
        <div className="cards-grid">
            {logements.map((logement) => (
                <article key={logement.id} className="card" onClick={() => handleClick(logement.id)}>
                    <img src={logement.cover} alt={logement.title} />
                    <h2>{logement.title}</h2>
                </article>
            ))}
        </div>
    </section>)
}