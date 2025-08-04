import AboutData from "../data/AboutData.json"
import "./AboutDropDown.scss"
import Arrow from "../images/Arrow_Back.png"
import { useState } from "react"

export default function AboutDropDown() {
  return (
    <div className="dropDownGrid">
      {AboutData.map((dropdown) => (
        <DropdownCard
          key={dropdown.id}
          title={dropdown.title}
          description={dropdown.description}
        />
      ))}
    </div>
  );
}

function DropdownCard({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const toggleDropdown = () => {
        if (isClosing) return; // Ignore les clics pendant la fermeture

        if (isOpen) {
        // Lance l'animation de fermeture
        setIsClosing(true);
        // Attend la fin de l'animation avant de vraiment fermer
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 150);
        } else {
        // Ouvre directement
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
                <p>{description}</p>
            </div>
        </article>
    );
}
