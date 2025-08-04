import AboutDropDown from "../components/AboutDropdown";
import logo from "../images/Background_About_Page.png"
import "./About.scss"

export default function AboutPage() {
  return <div className="container">
    <div className="containerAbout">
      <img src={logo} alt="Image de fond de la About page du site Kasa" />
    </div>
    <AboutDropDown />
  </div>;
}