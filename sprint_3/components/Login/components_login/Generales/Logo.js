import Link from 'next/link'
import estilosLogin from '@/styles/stylesLogin.module.css'

import Image from 'next/image'


export function Logo(){
    return(
        <Link href="/login"> 
            <Image src='/Logo_ITBANK.webp' alt="logo_ITBANK" className={estilosLogin.titulo_login} width='500' height='500' quality='100'/> 
        </Link>
    )
}