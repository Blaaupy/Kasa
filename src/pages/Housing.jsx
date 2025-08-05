import CarouselHousingPage from "../components/HousingPage/CarouselHousingPage";
import HousingDropdown from "../components/HousingPage/HousingDropdown";
import HousingTagsAndStars from "../components/HousingPage/HousingTagsAndStars";
import HousingTitleAndHost from "../components/HousingPage/HousingTitleAndHost";
import "./Housing.scss"

export default function HousingPage() {
  return (<div className="housingPage">
    <CarouselHousingPage />
    <HousingTitleAndHost />
    <HousingTagsAndStars />
    <HousingDropdown />

    
  </div>);
}