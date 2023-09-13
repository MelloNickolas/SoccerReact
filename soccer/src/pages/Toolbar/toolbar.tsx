import styles from "../Toolbar/Toolbar.module.scss";
import logo from "../../assets/logo.png";
import { BiSearch } from "react-icons/bi";

export default function Toolbar(){
    return(
        <header className={styles.toolbar}>

        <div className={styles.start}> 
            <img src={logo} alt="logo" className={styles.logo}/>
        </div>

        <div className={styles.middle}> 
        <div className={styles.containerInput}>
        <BiSearch className={styles.icon} size={25}/>
         <input className={styles.input}/>
        </div>
        </div>


        <div className={styles.end}> afsdfd </div>

        </header>
    )
}