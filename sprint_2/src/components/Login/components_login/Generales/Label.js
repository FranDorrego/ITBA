import estilosLogin from '../../stylesLogin.module.css'


export function Label({children}){
    return(
        <label className={estilosLogin.label_login}>{children}</label>
    )
}