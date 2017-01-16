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

	render() {
		return (
		  <div>
		    <Subheader>System Components</Subheader>
		    <Slider step={1/this.props.end_time} value={this.props.current_time/this.props.end_time} />
		  </div>
		);
	}
}

export default MyTimeline;