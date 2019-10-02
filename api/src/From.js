import React,{Component} from 'react';


class From extends Component {
	render() {
		return(
			<div>
			<form onSubmit={this.props.geather}>
			<input type="text" name="city" placeholder="City......"/>
			<input type="text" name="country" placeholder="Country....."/>
			<button>Get Weather</button>
			</form>
			</div>
			);
	}
	}
export default From;