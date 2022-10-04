import 'toolcool-range-slider/dist/plugins/tcrs-generated-labels.min.js';
import 'toolcool-range-slider';

const init = () => {

  // get the reference
  const $slider = document.getElementById('slider');

  // listen to the change event
  $slider.addEventListener('change', (evt) => {
    console.log(evt.detail.value);
  });

  // change value
  // $slider.value = 50;

  // or
  // $slider.setAttribute('value', '50');

  // or get value
  // console.log($slider.value);
};

init();