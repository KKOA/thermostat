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
  });
  describe("getPowerStatus", function () {
    it("return power saving mode", function () {
      expect(myThermostat.getPowerStatus()).toEqual('on');
    });
  });
  describe("resetTemp", function () {
    it("set tempeature back to default (" + DEFAULT_TEMP + ")", function () {
      myThermostat.resetTemp();
      expect(myThermostat.getTemp()).toEqual(DEFAULT_TEMP);
    });
  });
});
