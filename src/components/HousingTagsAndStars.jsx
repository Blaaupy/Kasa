import { useParams } from "react-router-dom";
import data from "../data/logements.json"
import "./HousingTagsAndStars.scss"


export  default function HousingTagsAndStars() {
    return <div>
        <div>
            <generateTags /> 
        </div>
        <div>
            <generateStars />
        </div>
        
    </div>
}

const {id} =  useParams();
const logement = data.find((item) => item.id === id);

function generateTags() {
    const tags = logement.tags
}

function generateStars(){
    const stars = logement.rating
}
