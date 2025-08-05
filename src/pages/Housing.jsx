import CarouselHousingPage from "../components/CarouselHousingPage";
import HousingDropdown from "../components/HousingDropdown";
import HousingTagsAndStars from "../components/HousingTagsAndStars";
import HousingTitleAndHost from "../components/HousingTitleAndHost";
import "./Housing.scss"

export default function HousingPage() {
  return (<div className="housingPage">
    <CarouselHousingPage />
    <HousingTitleAndHost />
    <HousingTagsAndStars />
    <HousingDropdown />

    
  </div>);
}