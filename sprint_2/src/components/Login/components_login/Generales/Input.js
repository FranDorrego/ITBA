import estilosLogin from '../../stylesLogin.module.css'

export function Input({type, name, id, placeholder}){
    return(
            <input className={estilosLogin.input_login} type={type} name={name} id={id} placeholder={placeholder}/>
        )
}