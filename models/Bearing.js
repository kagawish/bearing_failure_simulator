class Bearing {
    constructor(name, ...randomnessvars) {
        this._name = name;
        this._description = "An Indespensible part of the machine";
        this._cost = 32;

        this._bearing_life = randomnessvars[0];
        this._probability = randomnessvars[1];
        this._cumulative = _.each(this.probability, (index, element) => {
            var total = 0;
            for (let i = 0; i <= index; i++) {
                total += this.probability[i];
            }
            return total;
        });
        this._distribution_sample = function() {
            let rand = Math.random();
            for (let i = 0; i < this._bearing_life.length; i++) {
                if (i === 0 && rand < this._cumulative[i])
                    return this._bearing_life[i];
                if (rand < this._cumulative[i] && rand >= this._cumulative[i - 1]) return this._bearing_life[i];
            }
        }();
    }
}