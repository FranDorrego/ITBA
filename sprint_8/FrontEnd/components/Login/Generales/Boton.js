import { useNavigate } from 'react-router-dom';
import estilosLogin from '@/styles/stylesLogin.module.css'
import Link from 'next/link';


export function Boton({value, id}){  


    return(
            <input className={`${estilosLogin.boton_login}  ${estilosLogin.input_login}`} type="submit" value={value} id={id} />
        )
}




