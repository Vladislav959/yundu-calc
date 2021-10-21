import Calculator from './components/Calculator'
import EquationCalculator from './components/EquationCalculator'
import Switch from './components/Switch'
import {Component} from 'react'
class App extends Component{
  constructor(){
    super();
    this.state = {
      mode:1
    }
    this.setMode = this.setMode.bind(this);
  }
  setMode(mode){
    this.setState({mode})
  }
  render(){
  let element;
  switch(this.state.mode){
    case 1:
      element = <Calculator/>
      break;
    case 2:
      element = <EquationCalculator/>
      break;
    default:
      element = <Calculator/>
  }
  return (
    <div>
    <Switch setMode={this.setMode} curMode={this.state.mode}/>
      {element}
    </div>
  );
}

  }
export default App;
