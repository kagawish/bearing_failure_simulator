import React from 'react';
import Slider from 'material-ui/Slider';
import Subheader from 'material-ui/Subheader';

/**
 * By default, the slider is continuous.
 * The `step` property causes the slider to move in discrete increments.
 */
class MyTimeline extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSlideStop(event, value) { 
		this.props.on_change(value); 
	}

	render() {
		return (
		  <div>
		  	<h6> {this.props.current_time} / {this.props.end_time} </h6>
		    <Slider 
		    	onChange={this.handleSlideStop.bind(this)} 
		    	min={0}
		    	max={this.props.end_time}
		    	step={1} 
		    	value={this.props.current_time} 
		    />
		  </div>
		);
	}
}

export default MyTimeline;