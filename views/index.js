/**
 * The main application driver file.
 * This file creates both system in comparaison
 * finally it renders the App ReactJS component on the interface.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import ReliabilitySystem from '../models/ReliabilitySystem';
import Machine from '../models/Machine';
import Bearing from '../models/Bearing';
import Repairman from '../models/Repairman';

import $ from 'jquery';


var global_end_time = 25 * 24 * 60;

/**
	SYSTEM #1
**/
var myReliabilitySystem = new ReliabilitySystem('My Reliability System');

var myMachine = new Machine('My Machine');

var bearings_life = [1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900];
var bearings_life_probs = [0.1, 0.13, 0.25, 0.13, 0.09, 0.12, 0.02, 0.06, 0.05, 0.05]; 

var myBearing1 = new Bearing('My Bearing #1', bearings_life, bearings_life_probs);
var myBearing2 = new Bearing('My Bearing #2', bearings_life, bearings_life_probs);
var myBearing3 = new Bearing('My Bearing #3', bearings_life, bearings_life_probs);

var myRepairman = new Repairman('My Repairman', [5, 10, 15], [0.6, 0.3, 0.1]);

myMachine.assign_bearing(myBearing1);
myMachine.assign_bearing(myBearing2);
myMachine.assign_bearing(myBearing3);
myMachine.assign_repairman(myRepairman);

myReliabilitySystem.assign_machine(myMachine);

myReliabilitySystem.assign_end_time(global_end_time);

myReliabilitySystem.advance_timeline(global_end_time);


/**
	SYSTEM #2
**/

var myReliabilitySystem2 = new ReliabilitySystem('My Reliability System 2');

var myMachine2 = new Machine('My Machine 2');

var bearings_life2 = [1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900];
var bearings_life_probs2 = [0.1, 0.13, 0.25, 0.13, 0.09, 0.12, 0.02, 0.06, 0.05, 0.05]; 

var myBearing21 = new Bearing('My Bearing #1', bearings_life2, bearings_life_probs2);
var myBearing22 = new Bearing('My Bearing #2', bearings_life2, bearings_life_probs2);
var myBearing23 = new Bearing('My Bearing #3', bearings_life2, bearings_life_probs2);

var myRepairman2 = new Repairman('My Repairman', [5, 10, 15], [0.6, 0.3, 0.1]);

myMachine2.assign_bearing(myBearing21);
myMachine2.assign_bearing(myBearing22);
myMachine2.assign_bearing(myBearing23);
myMachine2.assign_repairman(myRepairman2);

myReliabilitySystem2.assign_machine(myMachine2);

myReliabilitySystem2.assign_end_time(global_end_time);

myReliabilitySystem2._repair_all = false;

myReliabilitySystem2.advance_timeline(global_end_time);

ReactDOM.render(
  <App 
  	system={myReliabilitySystem} 
  	compare_system={myReliabilitySystem2}
  />,
  document.getElementById('app')
);