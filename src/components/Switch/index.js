import styles from './index.module.css'
import {useState} from 'react'
export default function Switch(props){
    const [isModalShown,setModalShown] = useState(false);
    const setMode = (mode)=>{
        setModalShown(false);
        props.setMode(mode);
    }
    console.log(props.curMode)
return(
    <>
    <div className={styles.wall} onClick={()=>{setModalShown(!isModalShown)}} style={{display:isModalShown ? 'block' : 'none'}}/>
    <div className={styles.container + (isModalShown ? ' ' + styles.modalshown : '')}>
    <div onClick={()=>{setModalShown(!isModalShown)}} className={styles.switch}>
    <div style={{display:props.curMode === 1 ? 'flex' : 'none'}} onClick={()=>{setMode(1)}} className={styles.lineswitch + ' ' + styles.line}>
    <div><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 20 20" viewBox="0 0 20 20" fill="#ffffff"><g><rect fill="none" height="20" width="20"/></g><g><g><path d="M15,4H5C4.45,4,4,4.45,4,5v10c0,0.55,0.45,1,1,1h10c0.55,0,1-0.45,1-1V5C16,4.45,15.55,4,15,4z M6,7.27h3v1H6V7.27z M10,12.5H8.5V14h-1v-1.5H6v-1h1.5V10h1v1.5H10V12.5z M14,13.25h-3v-1h3V13.25z M14,11.75h-3v-1h3V11.75z M14.27,8.83l-0.71,0.71 L12.5,8.47l-1.06,1.06l-0.71-0.71l1.06-1.06l-1.06-1.06L11.44,6l1.06,1.06L13.56,6l0.71,0.71l-1.06,1.06L14.27,8.83z"/></g></g></svg></div>
    <p>Калькулятор</p></div>
    <div style={{display:props.curMode === 2 ? 'flex' : 'none'}} onClick={()=>{setMode(2)}} className={styles.lineswitch + ' ' + styles.line}>
    <div><svg version="1.1" id="id_svgCanvas" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" viewBox="0 0 24 24" style={{enableBackground:'new 0 0 24 24;'}} xmlSpace="preserve">
    <path id="_x32_634351383_x5F__x5F_x3C_x5F_Trazado_x5F_x3E_x5F_" d="M19.4,17.1c-0.5,0-2.2-0.2-2.2-2.1V6.9h2.6V4.4H4.1v2.5h2.6v4.7
	c0,5.3-2.8,5.5-3.1,5.5v2.5c0.1,0,5.7-0.1,5.7-8.1V6.9h5.2V15c0,3.4,2.9,4.7,4.8,4.7h0.9v-2.5H19.4z"/>
    </svg>
    </div>
    <p>Уравнения</p>
    </div>
    </div>
    <div className={styles.modal}>
    <div style={{display:props.curMode === 1 ? 'none' : 'flex'}} onClick={()=>{setMode(1)}} className={styles.line}>
    <div><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 20 20" viewBox="0 0 20 20" fill="#ffffff"><g><rect fill="none" height="20" width="20"/></g><g><g><path d="M15,4H5C4.45,4,4,4.45,4,5v10c0,0.55,0.45,1,1,1h10c0.55,0,1-0.45,1-1V5C16,4.45,15.55,4,15,4z M6,7.27h3v1H6V7.27z M10,12.5H8.5V14h-1v-1.5H6v-1h1.5V10h1v1.5H10V12.5z M14,13.25h-3v-1h3V13.25z M14,11.75h-3v-1h3V11.75z M14.27,8.83l-0.71,0.71 L12.5,8.47l-1.06,1.06l-0.71-0.71l1.06-1.06l-1.06-1.06L11.44,6l1.06,1.06L13.56,6l0.71,0.71l-1.06,1.06L14.27,8.83z"/></g></g></svg></div>
    <p>Калькулятор</p></div>
    <div style={{display:props.curMode === 2 ? 'none' : 'flex'}} onClick={()=>{setMode(2)}} className={styles.line}>
    <div><svg version="1.1" id="id_svgCanvas" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" viewBox="0 0 24 24" style={{enableBackground:'new 0 0 24 24;'}} xmlSpace="preserve">
    <path id="_x32_634351383_x5F__x5F_x3C_x5F_Trazado_x5F_x3E_x5F_" d="M19.4,17.1c-0.5,0-2.2-0.2-2.2-2.1V6.9h2.6V4.4H4.1v2.5h2.6v4.7
	c0,5.3-2.8,5.5-3.1,5.5v2.5c0.1,0,5.7-0.1,5.7-8.1V6.9h5.2V15c0,3.4,2.9,4.7,4.8,4.7h0.9v-2.5H19.4z"/>
    </svg>
    </div>
    <p>Уравнения</p>
    </div>
    
    </div>
    </div>
</>
)
}