/**
 * This represents the main Class, or the Containing class,
 * This class represents the System Component which
 * would contain all the different other
 * components and may help their
 * interaction.
 * It also contains the statistics about the system as a whole.
 */
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
        this._cost_states = { x: [], y: []};
        this._sample_interval = 10;
    }

    /**
     * Decide the experiment is going to end after how many cycles.
     */
    assign_end_time(time) {
        this._end_time = time;
    }

    /**
     * Links a certain Machine Component to this system.
     */
    assign_machine(machine) {
        this._machine = machine;
    } 
    
    /**
     * Produces a State Object, that can be used later on in the states
     * array and can over all help us identify the different
     * states the system was in for each cycle
     * when it was working.
     */
    capture_state() {
        var current_state = {
            machine: this._machine._name,
            bearings: JSON.stringify(this._machine._bearings),
            repairman: JSON.stringify(this._machine._repairman),
            cost: this._total_cost
        };
        this._states.push(current_state);
        if (this._current_time % this._sample_interval === 0) {
            this._cost_states.x.push(this._current_time.toString());
            this._cost_states.y.push(this._total_cost);
        }
    }

    /**
     * Iteratively, in each cycle, recalculates the different,
     * stats that we are searching for in our system.
     */
    calculate_stats() {
        var total_cost_per_cycle = 0;
        this._total_cost += this._machine._total_cost;
    }

    /**
     * Main Actions needed to be taken each cycle, namely:
     * 1- Checks if the machine is broken.
     * 2- If the repairman if available, we replace the bearings.
     * 3- If not, we call the repairman and we wait until he comes.
     * 4- If the machine is not broken, we simply use it, by using the bearings.
     */
    advance_components_states() {
        this._machine._total_cost = 0;

        if (this._machine.is_broken()) {
            if (this._machine._repairman.is_available()) {
                this._machine._repairman._called = false;
                this._machine._repairman._time_until_arrival = -1;
                if (this._repair_all) {
                    this._machine.replace_all_bearings();
                    this._total_cost += this._machine._repairman._repair_time_per_bearing_numbers[this._machine._bearings.length-1] * this._machine._repairman._repair_cost_per_min;
                } 
                else {
                    this._machine.replace_broken_bearings();
                    this._total_cost += this._machine._repairman._repair_time_per_bearing_numbers[0] * this._machine._repairman._repair_cost_per_min;
                }
            } else if (!this._machine._repairman.is_available() && !this._machine._repairman.was_called()) {
                this._machine._repairman.call();
            } else if (!this._machine._repairman.is_available() && this._machine._repairman.was_called()) {
                this._machine._repairman.approaches();
            }
        } else {
            this._machine.use_bearings();
        }
    }

    /**
     * Simulates advancing the time by n cycles, and for each cycle, if we didn't
     * bypass the end time, we take needed actions for the components, advance current
     * time, calculate stats for the system and take a snapshot of the current state.
     */
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