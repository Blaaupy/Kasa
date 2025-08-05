import { Navigate, useParams } from "react-router-dom"
import data from "../../data/logements.json"
import "./CarouselHousingPage.scss"
import ArrowNext from "../../images/Arrow_Next.png"
import ArrowPrev from "../../images/Arrow_Prev.png"
import { useState } from "react"
 

export default function CarouselHousingPage() {

    const {id} =  useParams();
    const logement = data.find((item) => item.id === id);
    const [currentImage, setCurrentImage] = useState(0);
    
    if (!logement) {
        return <Navigate to="*" />
    };

    const pictures = logement.pictures;

    

    const handlePrev = () => {
        setCurrentImage((prevIndex) => 
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentImage((prevIndex) =>
            prevIndex === pictures.length -1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carouselContainer container">
            <img src={ArrowPrev} alt="Flèche précédente" role="button" onClick={handlePrev}  className="carouselArrow left"/>

            <img src={pictures[currentImage]} alt={`Image ${currentImage + 1} du logement`} className="carouselImage" />
            
            <img src={ArrowNext} alt="Flèche suivante" role="button" onClick={handleNext} className="carouselArrow right"/>

            <div className="carouselCounter">
                {currentImage + 1} / {pictures.length}
            </div>

        </div>
    );
}