export function Input({type, name, id, text, placeholder}){
    return(
            <input className="input_login" type={type} name={name} id={id} placeholder={placeholder} required/>
        )
}