import _ from 'lodash';

class Repairman {
    constructor(name, ...randomnessvars) {
        this._name = name;
        this._description = "Fixes a non-functional bearing."
        this._repair_cost_per_hour = parseFloat(30) / parseFloat(60);

        var cumulative = _.map(randomnessvars[2], (element, index) => {
            var total = 0;
            for (let i = 0; i <= index; i++) {
                total += randomnessvars[2][i];
            }
            return total;
        });
        this._distribution_sample = function() {
            let rand = Math.random();
            for (let i = 0; i < randomnessvars[1].length; i++) {
                if (i === 0 && rand < cumulative[i])
                    return randomnessvars[1][i];
                if (rand < cumulative[i] && rand >= cumulative[i - 1]) return randomnessvars[1];
            }
        }();
    }
}

export default Repairman;