import estilosLogin from '@/styles/stylesLogin.module.css'

export function Parrafo({children}){
    return(
        <p className={estilosLogin.parrafo_login}>{children}</p>
    )
    
}