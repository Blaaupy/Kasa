import "./HousingStars.scss";
import fullStar from "../../images/Full_Star.png"
import emptyStar from "../../images/Empty_Star.png"
import { useFindLogement } from "./FindId";

export default function HousingTagsAndStars() {
  const logement = useFindLogement();
  if (!logement || !logement.rating) {
    return null;
  }

  return (
    <div className="container housing-info">
      <div className="stars">{generateStars(logement.rating)}</div>
    </div>
  );
}

function generateStars(rating) {
  const totalStars = 5;

  return (
    <>
      {[...Array(totalStars)].map((_, index) => (
        <img
          key={index}
          src={index < rating ? fullStar : emptyStar}
          alt={index < rating ? "Étoile pleine" : "Étoile vide"}
          className="star"
        />
      ))}
    </>
  );
}
