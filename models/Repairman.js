/**
 * This class describes the Repairman component.
 */
import _ from 'lodash';

class Repairman {
    /**
     * Repairman has a function for generating distribution sample.
     * Also he has a _time_until_arrival variable which contains the 
     * time left until the repairman arrives after being called.
     */
    constructor(name, ...randomnessvars) {
        this._name = name;
        this._description = "Fixes a non-functional bearing."
        this._repair_cost_per_min = parseFloat(30) / parseFloat(60);
        this._repair_time_per_bearing_numbers = [20, 30, 40];
        this._time_until_arrival = -1;
        this._called = false;

        var cumulative = _.map(randomnessvars[1], (element, index) => {
            var total = 0;
            for (let i = 0; i <= index; i++) {
                total += randomnessvars[1][i];
            }
            return total;
        });
        this._distribution_sample = function() {
            let rand = Math.random();
            for (let i = 0; i < randomnessvars[0].length; i++) {
                if (i === 0 && rand < cumulative[i])
                    return randomnessvars[0][i];
                if (rand < cumulative[i] && rand >= cumulative[i - 1]) 
                    return randomnessvars[0][i];
            }
        };
    }

    /**
     * We simulate calling the repairman by generating a random variable
     * that defines the time left until he comes and decreases
     * with each each.
     */
    call() {
        this._time_until_arrival = this._distribution_sample();
        this._called = true;
    }

    /**
     * We simulate the repairman approaching by simply decreasing his
     * until arrival time left.
     */
    approaches() {
        this._time_until_arrival--;
    }

    /**
     * Helper function, describes if the repairman has been already called,
     * so as not to recall him when he was already called.
     */
    was_called() {
        return this._called;
    }

    /**
     * Helper function, describes if the repairman is available,
     * which means that there's no time left until his arrival.
     */
    is_available() {
        return this._time_until_arrival === 0;
    } 
}

export default Repairman;