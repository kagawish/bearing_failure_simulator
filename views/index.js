import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import ReliabilitySystem from '../models/ReliabilitySystem';
import Machine from '../models/Machine';
import Bearing from '../models/Bearing';
import Repairman from '../models/Repairman';

import $ from 'jquery';

var myReliabilitySystem = new ReliabilitySystem('My Reliability System');

var myMachine = new Machine('My Machine');

var myBearing1 = new Bearing('My Bearing #1', [1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900], [0.1, 0.13, 0.25, 0.13, 0.09, 0.12, 0.02, 0.06, 0.05, 0.05]);
var myBearing2 = new Bearing('My Bearing #2', [1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900], [0.1, 0.13, 0.25, 0.13, 0.09, 0.12, 0.02, 0.06, 0.05, 0.05]);
var myBearing3 = new Bearing('My Bearing #3', [1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900], [0.1, 0.13, 0.25, 0.13, 0.09, 0.12, 0.02, 0.06, 0.05, 0.05]);

var myRepairman = new Repairman('My Repairman', [5, 10, 15], [0.6, 0.3, 0.1]);

myMachine.assign_bearing(myBearing1);
myMachine.assign_bearing(myBearing2);
myMachine.assign_bearing(myBearing3);

myReliabilitySystem.assign_machine(myMachine);

myReliabilitySystem.assign_repairman(myRepairman);

myReliabilitySystem.assign_end_time(10);

ReactDOM.render(
  <App system={myReliabilitySystem}/>,
  document.getElementById('app')
);