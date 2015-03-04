var Thermostat = function() {
  this.DEFAULT_TEMP = 20;
  this.temp = this.DEFAULT_TEMP;
  this.isPowerSavingModeOn = true;
  this.DEFAULT_INCREMENT = 1;
  this.POWER_SAVE_MAX = 25;
  this.POWER_SAVE_OFF_MAX = 32;
  this.MIN_TEMP = 10;
  this.TEMP_LOW_THRESHOLD = 18;
  this.TEMP_MEDIUM_THRESHOLD = 25;
};

Thermostat.prototype.increase = function() {
  this.temp += this.DEFAULT_INCREMENT;
  this.temp = (this.isPowerSavingModeOn) ? Math.min(this.POWER_SAVE_MAX, this.temp) : Math.min(this.POWER_SAVE_OFF_MAX, this.temp);
};

Thermostat.prototype.decrease = function() {
  this.temp -= this.DEFAULT_INCREMENT;
  this.temp = Math.max(this.MIN_TEMP, this.temp);
};

Thermostat.prototype.turnPSMOff = function() {
  this.isPowerSavingModeOn = false;
};

Thermostat.prototype.turnPSMOn = function() {
  this.isPowerSavingModeOn = true;
  this.temp = (this.temp > this.POWER_SAVE_MAX) ? this.POWER_SAVE_MAX : this.temp;
};

Thermostat.prototype.pushResetButton = function() {
  this.temp = this.DEFAULT_TEMP;
};

Thermostat.prototype.usage = function() {
  return (this.temp < this.TEMP_LOW_THRESHOLD) ? 'LOW' : (this.temp < this.TEMP_MEDIUM_THRESHOLD) ? 'MEDIUM' : 'HIGH';
};