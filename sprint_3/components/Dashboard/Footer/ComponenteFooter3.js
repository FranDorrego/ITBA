import Link from 'next/link'
import estilosPlantilla from '@/styles/stylePlantilla.module.css'
import Image from 'next/image'


export function ComponenteFooter3({logo1, link1, alt1, logo2, link2, alt2, logo3, link3, alt3,}){
    return(
        <div className={estilosPlantilla.footerTercerDiv}>
            <label className={estilosPlantilla.footerNegrita}>Seguinos en:</label>
            <Link className={estilosPlantilla.socialFooter} href={ link1 } target="_blank">
                <Image src={logo1} alt={alt1} width={20} height={20}/>
            </Link>
            <Link className={estilosPlantilla.socialFooter} href={ link2 } target="_blank">
                <Image src={logo2} alt={alt2} width={30} height={30}/>
            </Link>
            <Link className={estilosPlantilla.socialFooter} href={ link3 } target="_blank">
                <Image src={logo3} alt={alt3} width={30} height={30}/>
            </Link>
       </div>
    )
}