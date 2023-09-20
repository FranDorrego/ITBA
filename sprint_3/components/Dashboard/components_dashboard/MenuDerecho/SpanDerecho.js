import estilosPlantilla from '@/styles/stylePlantilla.module.css'




export function SpanDerecho({id}){
    return(
        <span className={estilosPlantilla.user} >
            <button>
                <img src='/notifica.svg' alt="" /> 
            </button>
            <img className={estilosPlantilla.userFoto} src='/Avatar.svg' alt="user" id={id}/>
        </span>

    )
}