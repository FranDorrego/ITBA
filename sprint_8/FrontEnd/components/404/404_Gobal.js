
import styles from '@/styles/error/404_Global.module.css'
import ErrorText from './ErrorText/ErrorText';
import ErrorImge from './ErrorImage/ErrorImge';

// Componente principal para la página 404
function Error404Page(){
  return (
    <div className={styles.body404}>
      <ErrorText />
      <ErrorImge />
    </div>
  );
};

export default Error404Page