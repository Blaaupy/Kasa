import CarouselHousingPage from "../components/HousingPage/CarouselHousingPage";
import HousingDropdown from "../components/HousingPage/HousingDropdown";
import HousingStars from "../components/HousingPage/HousingStars";
import HousingTags from "../components/HousingPage/HousingTags"
import HousingTitle from "../components/HousingPage/HousingTitle";
import HousingHost from "../components/HousingPage/HousingHost"
import "./Housing.scss"
import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}


export default function HousingPage() {
  const width = useWindowWidth();
  const isSmallScreen = width <= 768;

  return (
    <div className={`housingPage page  ${isSmallScreen ? "small-screen" : ""}`}>
      <CarouselHousingPage />
      
      {isSmallScreen ? (
        // Version pour petit écran, classes différentes ou structure modifiée
        <>
          <div className="container housingTitleTags">
            <HousingTitle />
            <HousingTags />
          </div>
          <div className="container housingStarsHost">
            <HousingStars />
            <HousingHost />
          </div>
          <HousingDropdown />
        </>
      ) : (
        // Version normale pour écran plus large
        <>
          <div className="container housingTitleHost">
            <HousingTitle />
            <HousingHost />
          </div>
          <div className="container housing-info">
            <HousingTags />
            <HousingStars />
          </div>
          <HousingDropdown />
        </>
      )}
    </div>
  );
}

