import { useState } from "react";
import "./HousingDropdown.scss";
import data from "../data/logements.json";
import { useParams } from "react-router-dom";
import Arrow from "../images/Arrow_Back.png";

export default function HousingDropdown() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  return (
    <div className="housingDropDownGrid container">
      <div className="dropDownWrapper">
        <DropdownCard title="Description" content={logement.description} />
      </div>
      <div className="dropDownWrapper">
        <DropdownCard title="Équipements" content={logement.equipments} type="list" />
      </div>
    </div>
  );
}

function DropdownCard({ title, content, type = "text" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleDropdown = () => {
    if (isClosing) return;
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 150);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <article className="dropDownCard">
      <div className="TopBar" onClick={toggleDropdown}>
        <p>{title}</p>
        <img
          className={`ArrowBack ${isOpen ? "rotate" : ""}`}
          src={Arrow}
          alt="Flèche"
        />
      </div>

      <div className={`dropDownCardDescription ${isOpen ? "open" : ""} ${isClosing ? "closing" : ""}`}>
        {(isOpen || isClosing) &&
          (type === "list" ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          ))
        }
      </div>
    </article>
  );
}
