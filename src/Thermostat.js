var Thermostat = function() {
  this.temp = 20;
  this.isPowerSavingModeOn = true;
};

Thermostat.prototype.increase = function() {
  this.temp += 1;
  this.temp = (this.isPowerSavingModeOn) ? Math.min(25, this.temp) : Math.min(32, this.temp);
};

Thermostat.prototype.decrease = function() {
  this.temp -= 1;
  this.temp = Math.max(10, this.temp);
};

Thermostat.prototype.turnPSMOff = function() {
  this.isPowerSavingModeOn = false;
};

Thermostat.prototype.turnPSMOn = function() {
  this.isPowerSavingModeOn = true;
  this.temp = (this.temp > 25) ? 25 : this.temp;
};

Thermostat.prototype.pushResetButton = function() {
  this.temp = 20;
};

Thermostat.prototype.colour = function() {
  return (this.temp < 18) ? 'GREEN' : (this.temp < 25) ? 'YELLOW' : 'RED';
};

