import estilosDashboard from '@/styles/styleDashboard.module.css'
import { Saludo } from '../ContenidoPrincipal/Saludo'

export default function MotivoDiv() {
  return (
    <div className={estilosDashboard.transFormulario}>
    <Saludo titulo="Motivo" />
    <select name="motivo" id="motivo" className={estilosDashboard.transInputs}>
        <option value="varios">Varios</option>
        <option value="compra">Compra</option>
        <option value="p2p">Comercio P2P</option>
        <option value="gasto">Division de gastos / Gastos grupales</option>
    </select>
    </div>
  )
}
