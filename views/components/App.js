import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MyHeader from './MyHeader';
import MyMachine from './MyMachine';
import MyBearings from './MyBearings';
import MyRepairman from './MyRepairman';
import MyStatesTable from './MyStatesTable';
import MyCharts from './MyCharts';
import MyTimeline from './MyTimeline';
import MyAdvanceButton from './MyAdvanceButton';

injectTapEventPlugin();

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			system: this.props.system
		}
		this.advance_timeline_state = this.advance_timeline_state.bind(this);
	}

	advance_timeline_state(n) {
		var newSystem = this.state.system.advance_timeline(n);
		this.setState({
			system: newSystem
		});
	}

	slide_timeline(newtime) {
		if (newtime > this.state.system._current_time) {
			this.advance_timeline_state(newtime - this.state.system._current_time);
		}
	}

	render() {
		return (
			<MuiThemeProvider>
			  	<div>
				    <MyHeader 
				    	title={this.state.system._name}
				    />
				    <MyMachine
				    	machine={this.state.system._machine} 
				    />
				    <MyBearings 
				    	bearings={this.state.system._machine._bearings} 
				    />
				    <MyRepairman
				    	repairman={this.state.system._machine._repairman}
				    />
				    <MyStatesTable 
				    	states={this.state.system._states}
				    />
				    <MyCharts
				    	cost_states={this.state.system._cost_states}
				    />
				    <MyTimeline 
				    	current_time={this.state.system._current_time}
				    	end_time={this.state.system._end_time}
				    	on_change={this.slide_timeline.bind(this)}
				    />
				    <MyAdvanceButton 
				    	advance_method={this.advance_timeline_state}
				    />
			    </div>
			</MuiThemeProvider>
		);
	}
}

export default App;