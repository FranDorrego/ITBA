import { Parrafo } from "../Generales/Parrafo";
import { Subtitulo } from "../Generales/Subtitulo";
import estilosLogin from '@/styles/stylesLogin.module.css'
// Términos y condiciones

export function abrirModal(id){
    const modal = document.getElementById(id);
    modal.showModal();

}

export function Dialog({ titulo, contenido, id}){
    function cerraModal(){
        const modal = document.getElementById(id);
        modal.close();
    }
    


    return(
        <dialog className={estilosLogin.dialog_login} id={id}>
            <Subtitulo>{titulo}</Subtitulo>
            <Parrafo>{contenido}</Parrafo>
            <button className={`${estilosLogin.link_login} ${estilosLogin.btn_cerrar}`} id="btn-cerrar" type="button" onClick={cerraModal}>Cerrar</button>
        </dialog>                    
    )
}