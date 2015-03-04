var Thermostat = function() {
  this.temp = 20;
};

Thermostat.prototype.increase = function() {
  this.temp += 1;
};

Thermostat.prototype.decrease = function() {
  this.temp -= 1;
  this.temp = Math.max(10, this.temp);
};