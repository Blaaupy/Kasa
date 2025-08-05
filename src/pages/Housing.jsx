import CarouselHousingPage from "../components/CarouselHousingPage";
import HousingDropdown from "../components/HousingDropdown";
import HousingTagsAndStars from "../components/HousingTagsAndStars";
import "./Housing.scss"

export default function HousingPage() {
  return (<div className="housingPage">
    <CarouselHousingPage />
    <HousingTagsAndStars />
    <HousingDropdown />

    
  </div>);
}