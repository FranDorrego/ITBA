import logo from "../../assets-globales/assets/logo.svg"

export function Titulo(){
    return(
        <a href="../Dashboard/index.html">
        <div className="menu-arriba">
            <button className="menu-button">☰</button>
            <img className="menu-logo" src={logo} alt=""/> 
        </div>
        </a>
    )
}