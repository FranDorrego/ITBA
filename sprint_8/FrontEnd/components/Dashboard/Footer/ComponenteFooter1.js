import Link from 'next/link'
import estilosPlantilla from '@/styles/stylePlantilla.module.css'


export function ComponenteFooter1({text1, text2, link1, link2}){
    return(
        <div className={estilosPlantilla.footerPrimerDiv}>
            <Link className={estilosPlantilla.footerTexto} href={link1}> {text1} </Link>
            <Link className={estilosPlantilla.footerTexto} href={link2}> {text2} </Link>
        </div>
    )
}