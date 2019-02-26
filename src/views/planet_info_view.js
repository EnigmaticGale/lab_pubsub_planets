const PubSub = require('../helpers/pub_sub.js')

const PlanetInfoView = function(container) {
  this.container = container;
};

PlanetInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:planet-details', (evt) => {
    const planet = evt.detail;
    this.render(planet);
  });

  PlanetInfoView.prototype.render = function(planet){
    const infoParagraph = document.createElement('p');
    infoParagraph.textContent = `Name: ${planet.name}, Orbit: '${planet.orbit}', Day: ${planet.day}, Surface Area: ${planet.surfaceArea}, Volume: ${planet.volume}, Gravity: ${planet.gravity}, Moons: ${planet.moons} `;
    this.container.innerHTML = '';
    this.container.appendChild(infoParagraph);

  };

};

module.exports = PlanetInfoView;
