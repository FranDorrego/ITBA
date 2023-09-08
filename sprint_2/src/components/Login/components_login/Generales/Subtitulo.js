import estilosLogin from '../../stylesLogin.module.css'

export function Subtitulo({children}){
    return(
        <h2 className={estilosLogin.subtitulo_login}>{children}</h2>
    )
}