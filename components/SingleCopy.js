import React, { Component, PropTypes } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Panel } from 'react-bootstrap';

export default class SingleCopy extends Component {
	constructor() {
		super();
		this.state = {
			value: '',
			copied: false
		}
	}

	_handleRemove = () => {
		this.props.remove(this.props.id);
	}

	render() {
		return (			
			<div className="col-md-4" key={this.props.key}>
				<Panel>
				<textarea className="form-control" style={{ width: '100%' }} rows="10" value={this.state.value}
          onChange={({target: {value}}) => this.setState({value, copied: false})}></textarea>
				
				<div style={{marginTop:'10px'}}>
        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button className="btn btn-primary">Copy to clipboard</button>
        </CopyToClipboard>&nbsp;

        {this.state.copied ? <span style={{color: '#d9534f'}}>Copied.</span> : null}
        <button style={{float:'right'}} className="btn btn-danger" onClick={this._handleRemove}>Remove</button>
        </div>
        </Panel>        
      </div> 
		);
	}
}
