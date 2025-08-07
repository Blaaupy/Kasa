import AboutData from "../../data/AboutData.json"
import "./AboutDropDown.scss"
import { DropdownCard } from "../DropDown";

export default function AboutDropDown() {
  return (
    <div className="aboutGrid">
      {AboutData.map((dropdown) => (
        <DropdownCard
          key={dropdown.id}
          title={dropdown.title}
          content={dropdown.description}
        />
      ))}
    </div>
  );
}
