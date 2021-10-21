import styles from './EquationCalculator.module.css';
import Button from './Button';
import CEButton from './CEButton';
import ClearButton from './ClearButton'
import {produce} from 'immer';
import { evaluate } from 'mathjs';
import ValueBar from './ValueBar';
import {Component} from 'react'

const values = ['7','8','9','÷','4','5','6','•','1','2','3','-','0','.','=','+']
    const signs = ['-','+','*','/'];
export default class Calculator extends Component {
    constructor(){
        super();
        this.state = {
            value:'0',
            preview:'',
            elements:null,
            barSize:'2.1em',
            hiddenPreview:'',
            error:false
        }
    }
    
render(){
    return(
        
        <div className={styles.main}>
        <h3>Скоро.</h3>
        </div >
    )
}
}