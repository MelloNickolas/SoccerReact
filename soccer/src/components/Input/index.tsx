import styles from "./Input.module.scss";
import { BiSearch } from "react-icons/bi";

export default function Input(){
    return (

        <div className={styles.containerInput}>
        <BiSearch className={styles.icon} size={25} />
        <input className={styles.input} />
      </div>

    );
}