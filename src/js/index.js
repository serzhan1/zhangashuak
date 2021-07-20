// import * as $ from 'jquery'
import './toggle-button';
import './images'
import './assets'
import './slider.init.js'
import './modalbox'
import Splide from '@splidejs/splide';

if(window.location.pathname === '/'){
  new CBPFWTabs(document.getElementById('tabs'));
  jssor_1_slider_init();

  var sponsorsSlider = new Splide('#sponsors-slider', {
    type: 'loop',
    autoplay: true,
    fixedHeight:175,
    fixedWidth: 350,
    perPage: 3,
    arrows: false,
    gap:30,
    drag: true,
    cover: true,
    pagination: false,
  }).mount();

}
const projectSubfolder = /\/projects\/.+/;

if(projectSubfolder.test(window.location.pathname)){
  var secondarySlider = new Splide('#secondary-slider', {
    fixedHeight:100,
    fixedWidth: 150,
    arrows: false,
    perPage: 5,
    isNavigation: true,
    rewind: true,
    cover: true,
    pagination: false,
    breakpoints: {
      '768':{
        fixedWidth: 66,
        height: 40
      }
    }
  }).mount();
	var primarySlider = new Splide( '#primary-slider', {
		type       : 'fade',
		heightRatio: 0.5,
		pagination : false,
		arrows     : false,
		cover      : true,
	} )
  primarySlider.sync(secondarySlider).mount();
}