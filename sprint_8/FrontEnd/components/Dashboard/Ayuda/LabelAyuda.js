import estilosDashboard from '@/styles/styleDashboard.module.css'


export default function LabelAyuda({children}) {
  return (
    <label className={estilosDashboard.saludoAyuda}>
        {children}
    </label>
  )
}
