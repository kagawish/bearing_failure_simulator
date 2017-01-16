class Machine {
	constructor(name) {
		this._name = name;
		this._bearings = [];
        this._repairman = null;
		this._downtime_cost = 10;
		this._working = true;
	}

	assign_bearing(bearing) {
        this._bearings.push(bearing);
    }

    assign_repairman(repairman) {
        this._repairman = repairman;
    }

    is_broken() {
    	this._bearings.forEach((bearing) => {
        	if(bearing.is_broken()) {
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
