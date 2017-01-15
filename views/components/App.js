import React from 'react';

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
				    	repairman={this.state.system._repairman}
				    />
				    <MyStatesTable 
				    	states={this.state.system._states}
				    />
				    <MyTimeline 
				    	current_time={this.state.system._current_time}
				    	end_time={this.state.system._end_time}
				    />
				    <MyAdvanceButton 
				    	advance_method={this.advance_timeline_state}
				    />
			    </div>
			</MuiThemeProvider>
		);
	}
}