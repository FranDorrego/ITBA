import notificacion from '../../../assets-globales/assets/notifica.svg'
import avatar from '../../../assets-globales/assets/Avatar.svg'
import estilosPlantilla from '../../../assets-globales/stylePlantilla.module.css'



export function SpanDerecho({id}){
    return(
        <span className={estilosPlantilla.user} >
            <button>
                <img src={notificacion} alt="" /> 
            </button>
            <img className={estilosPlantilla.userFoto} src={avatar} alt="user" id={id}/>
        </span>

    )
}