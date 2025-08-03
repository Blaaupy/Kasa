import { CardsGeneration } from "../components/CardsGenerationHomePage"
import { FirstDivHomePage } from "../components/FirstDivHomePage"
import "../styles/main.scss"


export default function Home() {
  return (<div className="page">
    <FirstDivHomePage /> 
    <CardsGeneration />
  </div>)
}
