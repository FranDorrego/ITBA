import Link from 'next/link'
import estilosLogin from '@/styles/stylesLogin.module.css'


export function LinkCompuesto({textoParrafo, textoLink, link}){
    return(
        <p className={estilosLogin.parrafo_login}>{textoParrafo} <Link href={link} className={estilosLogin.link_login}>{textoLink}</Link></p>
    )
}