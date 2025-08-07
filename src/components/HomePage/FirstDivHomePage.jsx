import ImageBackground from "../../images/Background_home_page.png"
import "./FirstDivHomePage.scss"
import "../../styles/main.scss"


export function FirstDivHomePage() {
    return (<section className="container">
        <div className="container">
            <img src={ImageBackground} alt="Image de fond au titre de la home page du site Kasa"></img>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    </section>)
}