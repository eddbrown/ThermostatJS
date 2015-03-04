describe('Thermostat', function(){

  var thermostat;

  it('has a default temperature of 20 degrees', function(){
    thermostat = new Thermostat();
    expect(thermostat.temp).toEqual(20);
  });

  it('can increase the temperature', function(){
    thermostat = new Thermostat();
    thermostat.increase()
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










});