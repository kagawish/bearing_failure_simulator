class ReliabilityTestSystem {
    constructor(name) {
        this._name = name;
        this._description = "A system that tests the most cost-effective way to repair a milling machine's bearings."
        this._current_time = 0;
        this._end_time = -1;
        this._machine = null;
        this._states = [];
    }

    assign_machine(machine) {
        this._machine = machine;
    }

    calculate_stats() {
    }

    capture_state() {
    }

    advance_timeline(n) {
        for (let i = 0; i < n; i++) {
            if (this._current_time === this._end_time) {
                alert('Time ended.');
                console.log(this);
                return;
            }

            this._machine._bearings.forEach((bearing) => {
            	if(bearing.isBroken()) {
            		this._machine.buyBearing();
            		this._machine.replaceBearing();
            	}
            });
            
            this._current_time++;

            this.calculate_stats();
            this.capture_state();
        }
        console.log(this);
    }

    toString() {
        console.log('/----------------/');
        console.log('/----------------/');
        console.log(this._name);
        console.log(this._description);
        console.log('/----------------/');
        console.log(this._current_time);
        console.log(this._end_time);
        console.log('/----------------/');
        console.log('Machine: ' + this._machine);
        console.log('Bearings: ' + this._bearings);
        console.log('Repairman: ' + this._repairman);
        console.log('/----------------/');
        console.log('Stats: ');
        console.log('/----------------/');
        console.log('/----------------/');
        console.log();
    }
}

export default ReliabilityTestSystem;