import Arrow from "../images/Arrow_Back.png";
import { useState } from "react";
import "./DropDown.scss"

export function DropdownCard({ title, content, type = "text" }) {
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
                <li className="descriptionText" key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="descriptionText">{content}</p>
          ))
        }
      </div>
    </article>
  );
}