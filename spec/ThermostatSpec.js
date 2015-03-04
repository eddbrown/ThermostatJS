describe('Thermostat', function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  var TempChange = function(times, direction){
    for(var i = 1; i < times; i++) {
      (direction == 'up') ? thermostat.increase() : thermostat.decrease();
    }
  };

  it('has a default temperature of 20 degrees', function(){
    expect(thermostat.temp).toEqual(20);
  });

  it('can increase the temperature', function(){
    thermostat.increase();
    expect(thermostat.temp).toEqual(21);
  });

  it('can decrease the temperature', function(){
    thermostat.decrease();
    expect(thermostat.temp).toEqual(19);
  });

  it('has a minimum temperature of 10', function(){
    TempChange(20, 'down');
    expect(thermostat.temp).toEqual(10);
  });

  it('has a Power saving mode default set to on', function(){
    expect(thermostat.isPowerSavingModeOn).toBe(true);
  });

  it('can turn Power saving mode off', function(){
    thermostat.turnPSMOff();
    expect(thermostat.isPowerSavingModeOn).toBe(false);
  });

  it('can turn Power saving mode on', function(){
    thermostat.turnPSMOn();
    expect(thermostat.isPowerSavingModeOn).toBe(true);
  });

  it('has a maximum temperature of 25 if PSM is on', function(){
    TempChange(20, 'up');
    expect(thermostat.temp).toEqual(25);
  });

  it('has a maximum temperature of 32 if PSM is off', function(){
    thermostat.turnPSMOff();
    TempChange(50, 'up');
    expect(thermostat.temp).toEqual(32);
  });

  it('can reset temperature to 20', function(){
    TempChange(5, 'up');
    thermostat.pushResetButton();
    expect(thermostat.temp).toEqual(20);
  });

  it('has usage LOW when the temperature is below 18', function(){
    thermostat.temp = 15;
    expect(thermostat.usage()).toEqual('LOW');
  });

  it('has usage MEDIUM when the temperature is between 25 and 18', function(){
    thermostat.temp = 20;
    expect(thermostat.usage()).toEqual('MEDIUM');
  });

  it('has usage HIGH when the temperature is above 25', function(){
    thermostat.temp = 60;
    expect(thermostat.usage()).toEqual('HIGH');
  });

  it('should reset to 25 if the temperature is above 25 and power save is turned on', function(){
    thermostat.temp = 28;
    thermostat.turnPSMOn();
    expect(thermostat.temp).toEqual(25);
  });
});