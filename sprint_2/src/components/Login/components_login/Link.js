export function Link({textoParrafo, textoLink}){
    return(
        <p className="parrafo">{textoParrafo} <a href="/Login/register.html" className="link">{textoLink}</a></p>
    )
}