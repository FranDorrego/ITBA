import { Link } from "react-router-dom";

export function ComponenteFooter3({logo1, link1, alt1, logo2, link2, alt2, logo3, link3, alt3,}){
    return(
        <div className="footer-tercer-div">
            <h3>Seguinos en :</h3>
            <Link className="social-footer" href={ link1 } target="_blank">
                <img src={logo1} alt={alt1}/>
            </Link>
            <Link className="social-footer" href={ link2 } target="_blank">
                <img src={logo2} alt={alt2}/>
            </Link>
            <Link className="social-footer" href={ link3 } target="_blank">
                <img src={logo3} alt={alt3}/>
            </Link>
       </div>
    )
}