/**
 * This class describes a Machine component.
 * Machines are simply bearings containers in our case, 
 * not only this but they contain also information about our
 * repairman as well as functionalities that advance the state of
 * the system.
 */
class Machine {
	constructor(name) {
		this._name = name;
		this._bearings = [];
        this._repairman = null;
		this._downtime_cost = 10;
		this._working = true;
		this._total_cost = 0;
        this._cost_breakdown = {
            downtime: 0,
            replace_bearings: 0,
            repairman: 0
        }
	}

    /**
     * Links a bearing object to this machine object.
     */
	assign_bearing(bearing) {
        this._bearings.push(bearing);
    }

    /**
     * Links a repairman object to this machine object.
     */
    assign_repairman(repairman) {
        this._repairman = repairman;
    }

    /**
     * Helper function, describes if a machine is broken:
     * which is a machine is broken, if any of its bearings
     * are broken, the function also calculates the downtime
     * costs of the system.
     */
    is_broken() {
    	if (!this._working) {
    		this._total_cost += 10;
            this._cost_breakdown.downtime += 10;
    		return true;
    	}
    	this._bearings.some((bearing) => {
        	if(bearing.is_broken()) {
        		this._working = false;
        		return true;
        	}
        });
    	return false;
    }

    /**
     * Loops on all the machine's bearings and uses each one of
     * them, typical to happen on every cycle.
     */
    use_bearings() {
    	this._bearings.forEach((bearing) => {
    		bearing.use_one();
    	});
    }

    /**
     * Loops on all the machine's bearings and replace all of them
     * It calculates also the cost of this replacement.
     */
    replace_all_bearings() {
    	this._bearings.forEach((bearing) => {
    		bearing.replace_one();
    	});
    	this._working = true;
    	this._total_cost += this._bearings[0]._cost * 3;
        this._cost_breakdown.replace_bearings += this._bearings[0]._cost * 3;
    }

    /**
     * Loops on all the machine's bearings and replace only those broken.
     * It calculates also the cost of this replacement.
     */
    replace_broken_bearings() {
    	this._bearings.forEach((bearing) => {
    		if (bearing.is_broken()) {
    			bearing.replace_one();
                this._total_cost += this._bearings[0]._cost;
                this._cost_breakdown.replace_bearings += this._bearings[0]._cost;
            }
    	});
    	this._working = true;
    }
}

export default Machine;
