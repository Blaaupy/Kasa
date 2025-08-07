import "./HousingDropdown.scss";
import { DropdownCard } from "../DropDown";
import { useFindLogement } from "./FindId";

export default function HousingDropdown() {
  const logement = useFindLogement();
  if (!logement) return null;

  return (
    <div className="housingGrid container">
      <div className="dropDownWrapper">
        <DropdownCard title="Description" content={logement.description} />
      </div>
      <div className="dropDownWrapper">
        <DropdownCard title="Équipements" content={logement.equipments} type="list" />
      </div>
    </div>
  );
}
