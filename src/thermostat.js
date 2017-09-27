/*jshint esversion: 6 */


const DEFAULT_TEMP = 20;
const MIN_TEMP = 10;

function Thermostat() {
  this.temp = DEFAULT_TEMP;
  this.psm = true;
}

Thermostat.prototype.getTemp = function() {
  return this.temp;
};

Thermostat.prototype.raiseTemp = function() {
  this.temp +=  1;
};

Thermostat.prototype.isMinTemp = function() {
  return this.temp === MIN_TEMP;
};

Thermostat.prototype.lowerTemp = function() {
  if(this.isMinTemp()=== false)
  {
    this.temp -= 1;
  }
};

Thermostat.prototype.resetTemp = function(number) {
  this.temp = DEFAULT_TEMP;
};

Thermostat.prototype.getPSM = function() {
  return this.psm;
};
