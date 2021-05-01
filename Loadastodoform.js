import {Component} from 'react';
import ReactDOM from 'react-dom';
class Loadastodoform extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
         <form onSubmit={this.props.addTodo} >
                    <input type="text" name="todo"/>
                    <button>Add todo</button>
                </form>
			</div>
			)
	}
}
export default Loadastodoform;