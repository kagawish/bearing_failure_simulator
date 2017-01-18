import _ from 'lodash';

class Repairman {
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

    call() {
        this._time_until_arrival = this._distribution_sample();
        this._called = true;
    }

    was_called() {
        return this._called;
    }

    is_available() {
        return this._time_until_arrival === 0;
    }

    approaches() {
        this._time_until_arrival--;
    }
}

export default Repairman;