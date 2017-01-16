class ReliabilityTestSystem {
    constructor(name) {
        this._name = name;
        this._description = "A system that tests the most cost-effective way to repair a milling machine's bearings."
        this._current_time = 0;
        this._end_time = -1;
        this._machine = null;
        this._repairman = null;
        this._total_cost = 0;
        this._states = [];
    }

    assign_end_time(time) {
        this._end_time = time;
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

    buy_bearing() {
    }

    replace_bearing() {
    }

    advance_timeline(n) {
        for (let i = 0; i < n; i++) {
            if (this._current_time === this._end_time) {
                alert('Time ended.');
                return;
            }

            this._machine._bearings.forEach((bearing) => {
            	if(bearing.isBroken()) {
            		this.buyBearing();
            		this.replaceBearing();
            	}
            });
            
            this._current_time++;

            this.calculate_stats();
            this.capture_state();
        }
        return this;
    }
}

export default ReliabilityTestSystem;