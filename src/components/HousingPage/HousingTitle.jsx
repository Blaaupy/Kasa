import "./HousingTitle.scss";
import { useFindLogement } from "./FindId";

export default function HousingTitle(){
    const logement = useFindLogement();
    if (!logement) return null;

    return (<div className="container">
        <div className="housingTitle">
            <h1 className="housingH1">{logement.title}</h1>
            <p>{logement.location}</p>
        </div>
    </div>)

}