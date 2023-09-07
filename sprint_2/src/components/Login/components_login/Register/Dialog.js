import { Parrafo } from "../Generales/Parrafo";
import { Boton } from "../Generales/Boton";
import { Subtitulo } from "../Generales/Subtitulo";

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
        <dialog className="dialog_login" id={id}>
            <Subtitulo>{titulo}</Subtitulo>
            <Parrafo>{contenido}</Parrafo>
            <button className="link_login btn-cerrar_login" id="btn-cerrar" type="button" onClick={cerraModal}>Cerrar</button>
        </dialog>                    
    )
}