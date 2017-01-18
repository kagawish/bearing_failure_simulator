/**
 * This class describes a bearing component.
 */
import _ from 'lodash';

class Bearing {
    /**
     * Bearings have a function for generating distribution sample.
     * Also they have a _time_until_broken variable which contains the 
     * time left until this bearing is broken.
     */
    constructor(name, ...randomnessvars) {
        this._name = name;
        this._description = "An Indespensible part of the machine";
        this._cost = 32;

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
        this._time_until_broken = this._distribution_sample();
    }

    /**
     * Helper function, it describes the state where the bearing is
     * broken, that is to say, no time left until it is broken.
     */
    is_broken() {
        return this._time_until_broken <= 0;
    }

    /**
     * Simulates bearing usage by decreasing the time left until
     * the bearing is broken.
     */
    use_one() {
        this._time_until_broken--;
    }

    /**
     * Whenever we want to simulation having a new bearing,
     * we simply regenerate the _time_until_broken variable,
     * which means that we begin counting usage from the beginning
     * once again.
     */
    replace_one() {
        this._time_until_broken = this._distribution_sample();
    }
}

export default Bearing;