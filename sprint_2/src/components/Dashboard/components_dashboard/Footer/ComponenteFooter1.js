import { Link } from "react-router-dom";

export function ComponenteFooter1({text1, text2, link1, link2}){
    return(
        <div className="footer-primer-div">
            <Link className="footer-texto" to={link1}> {text1} </Link>
            <Link className="footer-texto" href={link2}> {text2} </Link>
        </div>
    )
}