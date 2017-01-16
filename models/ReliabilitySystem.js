class ReliabilityTestSystem {
    constructor(name) {
        this._name = name;
        this._description = "A system that tests the most cost-effective way to repair a milling machine's bearings."
        this._current_time = 0;
        this._end_time = 0;
        this._machine = null;
        this._repair_all = true;
        this._total_cost = 0;
        this._states = [];
    }

    assign_end_time(time) {
        this._end_time = time;
    }

    assign_machine(machine) {
        this._machine = machine;
    } 
 
    capture_state() {
        var current_state = {
            machine: this._machine._name,
            bearings: JSON.stringify(this._machine._bearings),
            repairman: JSON.stringify(this._machine._repairman),
            cost: this._total_cost
        };
        this._states.push(current_state);
    }

    calculate_stats() {
        var total_cost_per_cycle = 0;
        this._total_cost += this._machine._total_cost;
    }

    advance_components_states() {
        this._machine._total_cost = 0;

        if (this._machine.is_broken()) {
            console.log('Machine is broken');
            if (this._machine._repairman.is_available()) {
                console.log('Repairman is available');
                this._machine._repairman._called = false;
                this._machine._repairman._time_until_arrival = -1;
                if (this._repair_all) {
                    console.log('Repair all');
                    this._machine.replace_all_bearings();
                } 
                else {
                    console.log('Repair One');
                    this._machine.replace_broken_bearings();
                }
            } else if (!this._machine._repairman.is_available() && !this._machine._repairman.was_called()) {
                console.log('Repairman called');
                this._machine._repairman.call();
            } else if (!this._machine._repairman.is_available() && this._machine._repairman.was_called()) {
                console.log('Repairman approaching.');
                this._machine._repairman.approaches();
            }
        } else {
            console.log('Machine is not broken');
            this._machine.use_bearings();
        }
    }

    advance_timeline(n) {
        for (let i = 0; i < n; i++) {
            if (this._current_time === this._end_time) {
                alert('Time ended.');
                return;
            }

            this.advance_components_states();
            
            this._current_time++;

            this.calculate_stats();

            this.capture_state();
        }
        return this;
    }
}

export default ReliabilityTestSystem;