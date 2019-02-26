const PubSub = require('../helpers/pub_sub.js')

const SelectView = function () {

};

SelectView.prototype.bindEvents = function () {
  const element = document.querySelector('#planet_menu');
  element.addEventListener('click', (evt) => {
    const planetId = evt.target.id;
    PubSub.publish('SelectView:planet-submitted', planetId );
  });
};


module.exports = SelectView;
