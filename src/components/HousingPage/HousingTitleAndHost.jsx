import "./HousingTitleAndHost.scss";
import { useFindLogement } from "./FindId";

export default function HousingTitleAndHost(){
    const logement = useFindLogement();
    if (!logement) return null;

    return (<div className="container housingTitleHost">
        <div className="housingTitle">
            <h1 className="housingH1">{logement.title}</h1>
            <p>{logement.location}</p>
        </div>
        <div className="housingHost">
            <p>
                {logement.host.name.split(' ')[0]}<br />
                {logement.host.name.split(' ')[1]}
            </p>
            <img src={logement.host.picture} alt="Photo du propriètaire" />
        </div>
    </div>)

}