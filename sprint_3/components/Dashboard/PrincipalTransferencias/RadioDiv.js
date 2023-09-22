
import estilosDashboard from '@/styles/styleDashboard.module.css'


// Componente para las opciones de radio
export default function RadioDiv({children}) {
  return (
        <div className={estilosDashboard.transFormularioRadioDiv}>
            {children}
        </div>
    )
}
