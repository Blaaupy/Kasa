import logo from "../images/Logo_Footer.png"
import "./Footer.scss"

export function Footer(){
    return (<footer>
        <img src={logo} alt="Logo de l'agence immoblière Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>)
}