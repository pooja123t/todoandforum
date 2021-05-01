import {Component} from 'react';
import ReactDOM from 'react-dom';
import {Map} from "react-lodash"
const _ = require("lodash");
class Loadastodolist extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
	<Map collection={this.props.todo} iteratee={val=>
		 <li key={val}> {val.todo}</li>} />
</div>
	)
}
}
export default Loadastodolist;