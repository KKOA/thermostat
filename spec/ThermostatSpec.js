describe("Thermostat", function () {

  var myThermostat;

  beforeEach(function () {
    myThermostat = new Thermostat();
  });

  describe("getTemp", function () {
    it("returns default temperature of " + DEFAULT_TEMP, function () {
      expect(myThermostat.getTemp()).toEqual(DEFAULT_TEMP);
    });
  });
  describe("raiseTemp", function () {
    it("increase temperature by 1", function () {
      myThermostat.raiseTemp();
      expect(myThermostat.getTemp()).toEqual(DEFAULT_TEMP + 1);
    });
  });
  describe("lowerTemp", function () {
    it("reduce temperature by 1", function () {
      myThermostat.lowerTemp();
      expect(myThermostat.getTemp()).toEqual(DEFAULT_TEMP - 1);
    });

    it("prevent reduce temperature ( "+MIN_TEMP+" )", function () {
      for (var i = 1 ; i < 20 ; i++ )
      {
          console.log(myThermostat.isMinTemp())
          myThermostat.lowerTemp();
          console.log(myThermostat.getTemp());
      }
      expect(myThermostat.getTemp()).toEqual(MIN_TEMP);
    });
  });

  describe("getPSM", function () {
    it("return true by default", function () {
      expect(myThermostat.getPSM()).toEqual(true);
    });
  });

  describe("resetTemp", function () {
    it("set tempeature back to default ( " + DEFAULT_TEMP + " )", function () {
      myThermostat.resetTemp();
      expect(myThermostat.getTemp()).toEqual(DEFAULT_TEMP);
    });
  });
});
