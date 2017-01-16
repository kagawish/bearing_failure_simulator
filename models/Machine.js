class Machine {
	constructor(name) {
		this._name = name;
		this._bearings = [];
        this._repairman = null;
		this._downtime_cost = 10;
		this._working = true;
		this._total_cost = 0;
	}

	assign_bearing(bearing) {
        this._bearings.push(bearing);
    }

    assign_repairman(repairman) {
        this._repairman = repairman;
    }

    is_broken() {
    	if (!this._working) {
    		this._total_cost += 10;
    		return true;
    	}
    	this._bearings.some((bearing) => {
        	if(bearing.is_broken()) {
        		console.log('Bearing is broken');
        		this._working = false;
        		return true;
        	}
        });
    	return false;
    }

    use_bearings() {
    	this._bearings.forEach((bearing) => {
    		bearing.use_one();
    	});
    }

    replace_all_bearings() {
    	this._bearings.forEach((bearing) => {
    		bearing.replace_one();
    	});
    	this._working = true;
    	this._total_cost += this._bearings[0]._cost * 3;
    }

    replace_broken_bearings() {
    	this._bearings.forEach((bearing) => {
    		if (bearing.is_broken()) 
    			bearing.replace_one();
    	});
    	this._working = true;
    } 
}

export default Machine;
