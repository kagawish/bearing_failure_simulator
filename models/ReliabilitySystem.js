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
            repairman: JSON.stringify(this._machine._repairman)
        };
        this._states.push(current_state);
    }

    calculate_stats() {
    }

    advance_components_states() {
        if (this._machine.is_broken()) {
            if (this._machine._repairman.is_available()) {
                if (this._repair_all) {
                    this._machine.replace_all_bearings();
                } 
                else {
                    this._machine.replace_broken_bearings();
                }
            } else {
                this._machine._repairman.approaches();
            }
        } else {
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

            this.capture_state();

            this.calculate_stats();
        }
        return this;
    }
}

export default ReliabilityTestSystem;