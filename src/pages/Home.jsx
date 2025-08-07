import { CardsGeneration } from "../components/HomePage/CardsGenerationHomePage"
import { FirstDivHomePage } from "../components/HomePage/FirstDivHomePage"
import "../styles/main.scss"


export default function Home() {
  return (<div className="page">
    <FirstDivHomePage /> 
    <CardsGeneration />
  </div>)
}
