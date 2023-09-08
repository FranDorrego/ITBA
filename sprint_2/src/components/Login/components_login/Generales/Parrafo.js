import estilosLogin from '../../stylesLogin.module.css'

export function Parrafo({children}){
    return(
        <p className={estilosLogin.parrafo_login}>{children}</p>
    )
    
}