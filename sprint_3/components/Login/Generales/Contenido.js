import estilosLogin from '@/styles/stylesLogin.module.css'


export function Contenido({children}){
    return(
        <div className={estilosLogin.grid_login}>
            <div className={estilosLogin.contenido_login}>
                {children}
            </div>
        </div>
    )
}
