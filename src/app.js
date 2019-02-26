const planets = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectView = require('./views/select_view.js');
const PlanetInfoView = require('./views/planet_info_view.js');


document.addEventListener('DOMContentLoaded', () => {

  const selectView = new SelectView();
  selectView.bindEvents();

  const solarSystem = new SolarSystem(planets);
  solarSystem.bindEvents();

  const section = document.querySelector('#planet_details');

  const planetInfoView = new PlanetInfoView(section);
  planetInfoView.bindEvents();

});
