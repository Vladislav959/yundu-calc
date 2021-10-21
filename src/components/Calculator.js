import styles from './Calculator.module.css';
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
        this.addValue = this.addValue.bind(this);
        this.deleteValue = this.deleteValue.bind(this);
        this.getPreview = this.getPreview.bind(this);
        this.toDegree = this.toDegree.bind(this);
        this.getResult = this.getResult.bind(this);
        this.toPercent = this.toPercent.bind(this);
    }
    addValue(value){
        let finalValue;
        if(this.state.error){
            finalValue = '0'
            this.setState(produce(draft => {draft.erroe = false}))
        }
        else{
        if(this.state.value === '0' && !signs.includes(value)){
            finalValue = value;
        }
        else{
            if(!(signs.includes(this.state.value.slice(-1)) && signs.includes(value))){
                if(signs.includes(value)){
                    if(/^\d+\.?\d*e$/.test(this.state.value)){
                    this.setState(produce(draft => {draft.preview = ''}));
                    }
                    else{
                    this.setState(produce(draft => {draft.preview = draft.preview + draft.value + value;}));
                    }
                    finalValue = '0';
                }
                else{
                    finalValue = this.state.value + value;
                }
        }
            else{
                finalValue = this.state.value;
            }
        }
        }
        const callback = ()=>{
            this.setState(produce(draft => {draft.value = finalValue}),this.getPreview)
        }
        if(finalValue.length === 10 || finalValue.length === 11){
            this.setState(produce(draft => {draft.barSize = 'var(--size-1)'}),callback)
        }
        
        else if(finalValue.length === 12){
            this.setState(produce(draft => {draft.barSize = 'var(--size-2)'}),callback)
        }
        else if(finalValue.length === 13){
            this.setState(produce(draft => {draft.barSize = 'var(--size-3)'}),callback)
        }
        else if(finalValue.length < 10){
            callback()
        }
    }
    deleteValue(value){
        let finalValue;
        let noCallback = false;
        
        if(this.state.error){
            finalValue = '0'
            this.setState(produce(draft => {draft.error = false}))
        }
        else{
        if(value === 0){
            finalValue = '0';
            noCallback = true;
        }
        else{
        if(this.state.value.length === 1){
            if(this.state.value === '0'){
                finalValue = '0';
                noCallback = true;
            }
            else{
            finalValue = '0';
            }
        }
        else{
        finalValue = this.state.value.substring(0, this.state.value.length - 1);
        }
    }
}
    const callback = ()=>{
        this.setState(produce(draft => {draft.value = finalValue}),noCallback ? callback2 : callback1);
    }
    const callback1 = ()=>{
        this.getPreview();
    }
    const callback2 = ()=>{
        this.setState(produce(draft => {draft.preview = ''}))
    }
if(finalValue.length === 10 || finalValue.length === 11){
        this.setState(produce(draft => {draft.barSize = 'var(--size-1)'}),callback)
    }
    
    else if(finalValue.length === 12){
        this.setState(produce(draft => {draft.barSize = 'var(--size-2)'}),callback)
    }
    else if(finalValue.length === 13){
        this.setState(produce(draft => {draft.barSize = 'var(--size-3)'}),callback)
    }
    else if(finalValue.length < 10){
        callback()
    }
    
    }
    getPreview (){
        if(this.state.value !== '0' && signs.some(sign => {return (this.state.preview + this.state.value).includes(sign)})){
            try{
                let evalResult = evaluate(this.state.value);
                if(evalResult === 'Infinity'){
                    this.setState(produce(draft => {draft.preview = 'Делить на ноль нельзя'}))
                }
                else{
                    if(signs.some(m => this.state.preview.includes(m)) && !signs.includes(this.state.preview.slice(-1))){
                        const str = String(evaluate(this.state.preview + this.state.value)).slice(0,14)
                        this.setState(produce(draft => {draft.preview = str;}))
              
                    }
                    else if(!signs.some(m => this.state.preview.includes(m)) && !signs.includes(this.state.preview.slice(-1))){
                        const str = String(evaluate(this.state.value)).slice(0,14)
                        this.setState(produce(draft => {draft.preview = str;}))
               
                    }
                }
            }
            catch{
                this.setState(produce(draft => {draft.preview = draft.value;}))
                
            }
    
}
        }
    getResult(){
        if(this.state.error){
            this.setState(produce(draft => {draft.value = '0';draft.error = false;}))
        }
        else{
        if(this.state.value !== ''){
                let hiddenFinalSplit;
                if(/^\d+\.?\d*\^\d+\.?\d*$/.test(this.state.value)){
                hiddenFinalSplit = Math.pow(this.state.value.split('^')[0], this.state.value.split('^')[1]);
                hiddenFinalSplit = evaluate(this.state.preview + this.state.value);
                if(hiddenFinalSplit === Infinity || isNaN(hiddenFinalSplit)){
                    this.setState(produce(draft => {draft.value = '0';draft.preview = '';draft.barSize = 'var(--size-1)';}))
                }
                else{
                    let finalSplit = hiddenFinalSplit.toExponential().split('e');
                const value = finalSplit[0].slice(0,11) + 'e' + finalSplit[1];
            if(value.length === 10 || value.length === 11){
                this.setState(produce(draft => {draft.value = value;draft.barSize = 'var(--size-1)';}))
            }
        else if(value.length === 12){
            this.setState(produce(draft => {draft.value = value;draft.barSize = 'var(--size-2)';}))
        }
        
        else if(value.length >= 13 && this.state.preview.length <= 15){
            this.setState(produce(draft => {draft.value = value;draft.barSize = 'var(--size-3)';}))
        }
        else if(value.length > 15){
            this.setState(produce(draft => {draft.value = value;}))
        }
        else if(value.length < 10){
            this.setState(produce(draft => {draft.value = String(evaluate(this.state.preview + this.state.value)).slice(0,14);draft.barSize = 'var(--size-1)';}))
        }
                }
                }
                else if(/^\d+\.?\d*e$/.test(this.state.value)){
                    this.setState(produce(draft => {draft.value = '0';draft.preview = '';draft.barSize = 'var(--size-1)';}))
                }
                else{
                    hiddenFinalSplit = evaluate(this.state.preview + this.state.value);
                    
            if(signs.some(m => this.state.preview.includes(m))){
                if(hiddenFinalSplit === Infinity || isNaN(hiddenFinalSplit)){
                    this.setState(produce(draft => {draft.value = 'Ошибка';draft.error = true;draft.preview = '';draft.barSize = 'var(--size-1)';}))
                }
                else{
                    let finalSplit = hiddenFinalSplit.toExponential().split('e');
                const value = finalSplit[0].slice(0,11) + 'e' + finalSplit[1];
                console.log(value.length)
            if(value.length === 10 || value.length === 11){
                this.setState(produce(draft => {draft.value = value;draft.barSize = 'var(--size-1)';}))
            }
        else if(value.length === 12){
            console.log(value)
            this.setState(produce(draft => {draft.value = value;draft.barSize = 'var(--size-2)';}))
        }
        
        else if(value.length >= 13 && this.state.preview.length <= 15){
            console.log(value)
            this.setState(produce(draft => {draft.value = value;draft.barSize = 'var(--size-3)';}))
        }
        else if(value.length >= 15){
            console.log(value)
            this.setState(produce(draft => {draft.value = value;}))
        }
        else if(value.length < 10){
            console.log(value)
            this.setState(produce(draft => {draft.value = String(evaluate(this.state.preview + this.state.value)).slice(0,14);draft.barSize = 'var(--size-1)';}))
        }
                }}
                
    }
            }
}}
toDegree(value){
    let finalValue;
        if(this.state.value === '0' && value !== '^'){
            finalValue = value;
        }
        else{
            if(!(signs.includes(this.state.value.slice(-1)) && value === '^')){
                    finalValue = this.state.value + value;
                
        }
            else{
                finalValue = this.state.value;
            }
        }
        const callback = ()=>{
            this.setState(produce(draft => {draft.value = finalValue}),this.getPreview)
        }
        if(finalValue.length === 10 || finalValue.length === 11){
            this.setState(produce(draft => {draft.barSize = 'var(--size-1)'}),callback)
        }
        
        else if(finalValue.length === 12){
            this.setState(produce(draft => {draft.barSize = 'var(--size-2)'}),callback)
        }
        else if(finalValue.length === 13){
            this.setState(produce(draft => {draft.barSize = 'var(--size-3)'}),callback)
        }
        else if(finalValue.length < 10){
            callback()
        }
}
toPercent(){
    this.setState(produce(draft => {draft.value = draft.value / 100}))
}
componentDidMount(){
    const elements = values.map((elem,index)=>{
        if(elem === '='){
            return <Button accent value="=" key={index} func={this.getResult}>=</Button>
        }
        else if(elem === '÷'){
            return <Button gray value="/" key={index} func={this.addValue}>÷</Button>
        }
        else if(elem === '•'){
            return <Button gray value="*" key={index} func={this.addValue}>•</Button>
        }
        else{
        const boolean = ['÷','•','-','+'].includes(elem);
        return <Button gray={boolean} value={elem} key={index} func={this.addValue}>{elem}</Button>
        }
    })
    this.setState(produce(draft => {draft.elements = elements}))
}
render(){
    return(
        
        <>
        <ValueBar size={this.state.barSize} big={this.state.value} preview={this.state.preview}/>
        <div className={styles.main}>
        
        <CEButton/>
        <Button gray func={this.toPercent} styles={{gridArea:'percent'}}>%</Button>
        <Button gray value="^" func={this.toDegree} styles={{position:'relative',gridArea:'degree'}}>x<span className={styles.degreespan}>a</span></Button>
        <ClearButton func={this.deleteValue}/>
            {this.state.elements}
        </div>
        </>
    )
}
}