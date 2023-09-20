import estilosDashboard from '../../styleDashboard.module.css'

export function BotonPrestamo({children}){

    function abrirModal(){
        const modal = document.getElementById('dialogPrestamos');
        modal.showModal();
    
    }

    return(
        <button className={estilosDashboard.btnAbrir} type="button" onClick={abrirModal}>{children}  </button>    
    )
}