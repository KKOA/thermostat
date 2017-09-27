
const DEFAULT_TEMP = 20;

function Thermostat() {
  this.temp = DEFAULT_TEMP;
  this.psm = 'on'
}

Thermostat.prototype.getTemp = function() {
  return this.temp;
}

Thermostat.prototype.raiseTemp = function() {
  this.temp +=  1;
}

Thermostat.prototype.lowerTemp = function() {
  this.temp -= 1;
}

Thermostat.prototype.getPowerStatus = function() {
  return this.psm;
}

Thermostat.prototype.resetTemp = function(number) {
  this.temp = DEFAULT_TEMP;
}
