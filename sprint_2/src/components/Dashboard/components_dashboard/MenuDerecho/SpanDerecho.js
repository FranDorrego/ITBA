import notificacion from '../../../assets-globales/assets/notifica.svg'
import avatar from '../../../assets-globales/assets/Avatar.svg'

export function SpanDerecho(){
    return(
        <span className="user">
            <button>
                <img src={notificacion} alt="" /> 
            </button>
            <img className="user-foto" src={avatar} alt="user" />
        </span>

    )
}