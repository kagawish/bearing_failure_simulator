class Repairman {
    constructor(name, ...randomnessvars) {
        this._name = name;
        this._description = "Fixes a non-functional bearing."
        this._repair_cost_per_hour = parseFloat(30) / parseFloat(60);

        this._delay_time = randomnessvars[0];
        this._probability = randomnessvars[1];
        this._cumulative = _.each(this._probability, (index, element) => {
            var total = 0;
            for (let i = 0; i <= index; i++) {
                total += this._probability[i];
            }
            return total;
        });
        this._distribution_sample_of_delay_time = function() {
            let rand = Math.random();
            for (let i = 0; i < this._delay_time.length; i++) {
                if (i === 0 && rand < this._cumulative[i])
                    return this._delay_time[i];
                if (rand < this._cumulative[i] && rand >= this._cumulative[i - 1]) return this._delay_time[i];
            }
        };
    }
}