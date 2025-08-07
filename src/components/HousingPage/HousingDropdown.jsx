import "./HousingDropdown.scss";
import data from "../../data/logements.json";
import { useParams } from "react-router-dom";
import { DropdownCard } from "../DropDown";

export default function HousingDropdown() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

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
