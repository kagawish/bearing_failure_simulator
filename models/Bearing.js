import _ from 'lodash';

class Bearing {
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

    is_broken() {
        return (this._time_until_broken === 0);
    }

    use_one() {
        this._time_until_broken--;
    }

    replace_one() {
        this._time_until_broken = this._distribution_sample();
    }
}

export default Bearing;