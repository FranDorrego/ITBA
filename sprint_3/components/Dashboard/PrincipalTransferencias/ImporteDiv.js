import estilosDashboard from '@/styles/styleDashboard.module.css'
import { Saludo } from '../ContenidoPrincipal/Saludo'

export default function ImporteDiv({children}) {
  return (
    <div className={estilosDashboard.transFormulario}>
        <Saludo texto="Importe*" />
        {children}
        <h1 className={estilosDashboard.AchicaLetra}>
            *El importe mínimo a transferir es de $ 1 y el máximo es de de dos salarios mínimos vitales y
            móviles.
        </h1>
    </div>
  )
}
