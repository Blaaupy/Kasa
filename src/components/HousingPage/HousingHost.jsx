import "./HousingHost.scss";
import { useFindLogement } from "./FindId";

export default function HousingTitle(){
    const logement = useFindLogement();
    if (!logement) return null;

    return (
        <div className="container housingHost">
            <p>
                {logement.host.name.split(' ')[0]}<br />
                {logement.host.name.split(' ')[1]}
            </p>
            <img src={logement.host.picture} alt="Photo du propriètaire" />
        </div>
    )
}