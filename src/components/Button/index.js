import styles from './index.module.css';
export default function Button(props){
    return(
        <div style={props.styles} onClick={()=>{props.func(props.value)}} className={styles.button + (props.accent ? ' ' + styles.buttonaccent : props.gray ? ' ' + styles.buttongray : '')}>
            <p style={{color:props.accent ? '#ffffff' : 'auto'}}>{props.children}</p>
        </div>
    )
}