import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Examples extends Component {

	func01(){
		console.log('Hello from func01')
		return "function 01"
	}

  render() {
	 const func02 = () => {
		console.log('Hello from func02')
		return "function in render"
	}

    return (
		<div>
		<div>Simple React </div>
		//div style içine color vermek
		<div style={{color:"red"}}>hello</div>
		//javascript value type gösterimi
		<div>{1 + 1}</div>
		//function gösterimi
		<div>{this.func01()}</div>
		<div>{func02()}</div>
		</div>

	)
  }
}

ReactDOM.render(
  <Examples/>,
  document.getElementById('root')
)
