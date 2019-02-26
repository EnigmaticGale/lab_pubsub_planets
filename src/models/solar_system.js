const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:planet-submitted', (evt) => {
    const clickedId = evt.detail;
    const result = this.planetDetails(clickedId);
    PubSub.publish('SolarSystem:planet-details', result);
  });
};

SolarSystem.prototype.planetDetails = function (id) {
  let planetDetails = this.planets.find(function(planet){
  return planet.name === id;
  });
  return planetDetails;

};

module.exports = SolarSystem;
