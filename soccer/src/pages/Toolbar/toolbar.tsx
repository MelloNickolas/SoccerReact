import styles from "../Toolbar/Toolbar.module.scss";
import logo from "../../assets/logo.png";
import filtros from "./filtros.json"
import Input from '../../components/Input/index';

type IOpcao = typeof filtros[0];

export default function Toolbar() {
  return (
    <header className={styles.toolbar}>
      <div className={styles.start}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>

      <div className={styles.middle}>
        <Input/>
      </div>

      <div className={styles.end}>
        <div className={styles.end__box}>
            {filtros.map((opcao) => 
                <button className={styles.end__box__button} key={opcao.id}> {opcao.label} </button>
            
            )}
        </div>
      </div>
    </header>
  );
}
