thermostat = new Thermostat();

var ShowTemp = function() {
  $("#temp").text(thermostat.temp);
  USAGE = thermostat.usage();
  TempColour((USAGE == 'LOW') ? "green" : (USAGE == 'MEDIUM') ? "orange" : "red");
}

var TempColour = function(colour){
  $("#temp").css("color", colour);
}

var ShowMode = function() {
  $("#mode").text(function(){
    return (thermostat.isPowerSavingModeOn) ? 'On' : 'Off';
  });
}

var ShowAll = function() {
  ShowMode();
  ShowTemp();
}

ShowAll();

$("#increase").click(function() {
  thermostat.increase();
  ShowAll();
});

$("#decrease").click(function() {
  thermostat.decrease();
  ShowAll();
});

$("#reset").click(function() {
  thermostat.pushResetButton();
  ShowAll();
});

$("#powersaveon").click(function() {
  thermostat.turnPSMOn();
  ShowAll();
});

$("#powersaveoff").click(function() {
  thermostat.turnPSMOff();
  ShowAll();
});





