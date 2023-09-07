import { Link } from "react-router-dom";

export function ComponenteFooter2({text1, text2, link1, link2}){
    return(
        <div className="footer-segundo-div">
            <Link className="footer-texto" href={ link1 }> { text1 } </Link>
            <Link className="footer-texto" href={ link2 }> { text2 } </Link>
       </div>
    )
}