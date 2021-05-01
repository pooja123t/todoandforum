import {Component} from 'react';
import Loadastodoform from './Loadastodoform'
import Loadastodolist from './Loadastodolist'
const _ = require("lodash")

class Loadshtodo extends Component{
	constructor(props){
		super(props)
		console.log(props)
		
		console.log(this)
		this.state={
			todo:[]
		}
	}
	addTodo=(e)=>{
		e.preventDefault()
		let arr={}
		_.set(arr,'todo',e.target.todo.value)

		console.log(arr)
		this.setState({
			todo:this.state.todo.concat(arr)
		})
		console.log(this.state)
		localStorage.setItem("newtodo", this.state.todo)
	}
	render(){
		return(
			<div>
			<Loadastodoform addTodo={this.addTodo} />
			<Loadastodolist todo={this.state.todo} />
			</div>
			)
	}
}
export default Loadshtodo;

