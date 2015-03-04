describe('Thermostat', function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

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
    for(var i = 1; i < 20; i++) {
      thermostat.decrease();
    }
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
    for(var i = 1; i < 20; i++) {
      thermostat.increase();
    }
    expect(thermostat.temp).toEqual(25);
  });

  it('has a maximum temperature of 32 if PSM is off', function(){
    thermostat.turnPSMOff();
    for(var i = 1; i < 25; i++) {
      thermostat.increase();
    }
    expect(thermostat.temp).toEqual(32);
  });

  it('can reset temperature to 20', function(){
    for(var i = 1; i <10; i++) {
      thermostat.increase();
    }
    thermostat.pushResetButton();
    expect(thermostat.temp).toEqual(20);
  });

  it('is GREEN when the temperature is below 18', function(){
    thermostat.temp = 15;
    expect(thermostat.colour()).toEqual('GREEN');
  });

  it('is YELLOW when the temperature is between 25 and 18', function(){
    thermostat.temp = 20;
    expect(thermostat.colour()).toEqual('YELLOW');
  });

  it('is YELLOW when the temperature is between 25 and 18', function(){
    thermostat.temp = 20;
    expect(thermostat.colour()).toEqual('YELLOW');
  });

  it('is RED when the temperature is above 25', function(){
    thermostat.temp = 60;
    expect(thermostat.colour()).toEqual('RED');
  });
});