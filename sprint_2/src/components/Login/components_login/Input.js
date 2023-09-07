export function Input({type, name, id, text, placeholder}){
    return(
            <input className="input" type={type} name={name} id={id} placeholder={placeholder} required/>
        )
}