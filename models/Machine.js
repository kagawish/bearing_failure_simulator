class Machine {
	constructor(name) {
		this._name = name;
		this._bearings = [];
		this._downtime_cost = 10;
	}

	assign_bearing(bearing) {
        this._bearings.push(bearing);
    }
}

export default Machine;
