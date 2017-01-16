import React from 'react';
import {Bar} from 'react-chartjs-2';

class MyCharts extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var data = {
	        datasets: [{
	            label: 'Scatter Dataset',
	            data: [{
	                x: -10,
	                y: 0
	            }, {
	                x: 0,
	                y: 10
	            }, {
	                x: 10,
	                y: 5
	            }]
	        }]
	    };

		return (<Bar
			data={data}
		    width={100}
		    height={50}
		/>);
	}
}

export default MyCharts;