import React, { Component, PropTypes } from 'react';
import SingleCopy from '../components/SingleCopy';
import { Panel } from 'react-bootstrap';
import Animate from 'rc-animate';
const styles = require('../less/main.less');

export default class CopyContainer extends Component {
	constructor() {
		super();
		this.state = {
			copyArr: ["1"]
		};
	}

	_addCopy = () => {
		const tempCopyArr = this.state.copyArr;
		const arrId = Date.now().toString();
		tempCopyArr.push(arrId);
		this.setState({
			copyArr: tempCopyArr
		});
	}

	_removeCopy = (id) => {
		const tempCopyArr = this.state.copyArr;
		const tempKey = tempCopyArr.indexOf(id);
		tempCopyArr.splice(tempKey, 1);
		this.setState({
			copyArr: tempCopyArr
		});	
	}

	render() {
		let copyGrid = this.state.copyArr.map(i => 
			<SingleCopy key={i} id={i} remove={this._removeCopy}/>
		);
		return (
			<div className="row">
			<Animate transitionName="fade">
			{copyGrid}
			</Animate>
			<div className="col-md-4">
			<Panel>
			<div style={{textAlign:"center", cursor:"pointer"}} onClick={this._addCopy}>
			  <i style={{fontSize:"4em",color:"#286090"}}className="fa fa-plus"></i>
			</div>
			</Panel>
			</div>						
			</div>
		);
	}
}
