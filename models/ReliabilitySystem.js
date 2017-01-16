class ReliabilityTestSystem {
    constructor(name) {
        this._name = name;
        this._description = "A system that tests the most cost-effective way to repair a milling machine's bearings."
        this._current_time = 0;
        this._end_time = -1;
        this._machine = null;
        this._repairman = null;
        this._states = [];
    }

    assign_machine(machine) {
        this._machine = machine;
    }

    assign_repairman(repairman) {
        this._repairman = repairman;
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
    }
}

export default ReliabilityTestSystem;