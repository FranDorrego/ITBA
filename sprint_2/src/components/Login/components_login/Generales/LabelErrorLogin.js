import estilosLogin from '../../stylesLogin.module.css'

export function LabelErrorLogin({children}){
    return(
        <span className={estilosLogin.labelErrorLogin}>{children}</span>
    )
}