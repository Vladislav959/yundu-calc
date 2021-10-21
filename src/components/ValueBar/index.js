import styles from './index.module.css'
export default function ValueBar(props){
    return(
        <div className={styles.main}>
            <span className={styles.mainspan}>{props.preview}</span>
            <span style={{fontSize:props.size}} className={styles.mainp}>{props.big}</span>
        </div>
    )
}