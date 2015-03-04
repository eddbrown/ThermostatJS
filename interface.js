thermostat = new Thermostat();

var ShowTemp = function() {
  $("#temp").text(thermostat.temp);
}

var ShowMode = function() {
  $("#mode").text(function(){
  return (thermostat.isPowerSavingModeOn) ? 'On' : 'Off';
  });
}

ShowMode();
ShowTemp();

$("#increase").click(function() {
  thermostat.increase();
  ShowTemp();
});

$("#decrease").click(function() {
  thermostat.decrease();
  ShowTemp();
});

$("#reset").click(function() {
  thermostat.pushResetButton();
  ShowTemp();
});

$("#powersaveon").click(function() {
  thermostat.turnPSMOn();
  ShowMode();
  ShowTemp();
});

$("#powersaveoff").click(function() {
  thermostat.turnPSMOff();
  ShowMode();
  ShowTemp();
});





