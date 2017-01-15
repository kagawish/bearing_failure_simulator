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

var myBearing1 = new Bearing('My Bearing #1');
var myBearing2 = new Bearing('My Bearing #2');
var myBearing3 = new Bearing('My Bearing #3');

var myRepairman = new Repairman('My Repairman');

myMachine.assignBearing(myBearing1);
myMachine.assignBearing(myBearing2);
myMachine.assignBearing(myBearing3);

myReliabilitySystem.assign_machine(myMachine);

myReliabilitySystem.assign_repairman(myRepairman);

ReactDOM.render(
  <App system={myReliabilitySystem}/>,
  document.getElementById('app')
);
