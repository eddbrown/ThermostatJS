describe('Thermostat', function(){

  var thermostat;

  it('has a default temperature of 20 degrees', function(){
    thermostat = new Thermostat();
    expect(thermostat.temp).toEqual(20);
  });

  it('can increase the temperature', function(){
    thermostat = new Thermostat();
    thermostat.increase();
    expect(thermostat.temp).toEqual(21);
  });

  it('can decrease the temperature', function(){
    thermostat = new Thermostat();
    thermostat.decrease();
    expect(thermostat.temp).toEqual(19);
  });

  it('has a minimum temperature of 10', function(){
    thermostat = new Thermostat();
    for(var i = 1; i < 20; i++) {
      thermostat.decrease();
    }
    expect(thermostat.temp).toEqual(10);
  });

  it('has a Power saving mode default set to on', function(){
    thermostat = new Thermostat();
    expect(thermostat.isPowerSavingModeOn).toBe(true);
  });

  it('can turn Power saving mode off', function(){
    thermostat = new Thermostat();
    thermostat.turnPSMOff();
    expect(thermostat.isPowerSavingModeOn).toBe(false);
  });

  it('can turn Power saving mode on', function(){
    thermostat = new Thermostat();
    thermostat.turnPSMOn();
    expect(thermostat.isPowerSavingModeOn).toBe(true);
  });

  it('has a maximum temperature of 25 if PSM is on', function(){
    thermostat = new Thermostat();
    for(var i = 1; i < 20; i++) {
      thermostat.increase();
    }
    expect(thermostat.temp).toEqual(25);
  });

  it('has a maximum temperature of 32 if PSM is off', function(){
    thermostat = new Thermostat();
    thermostat.turnPSMOff();
    for(var i = 1; i < 25; i++) {
      thermostat.increase();
    }
    expect(thermostat.temp).toEqual(32);
  });









});