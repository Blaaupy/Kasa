import { useParams } from "react-router-dom"
import data from "../../data/logements.json"
import "./HousingTitleAndHost.scss"

export default function HousingTitleAndHost(){
    const {id} =  useParams();
    const logement = data.find((item) => item.id === id);

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