var index = document.getElementById('index');
var landing = document.getElementById('landing');
var landingHeight = parseInt(getComputedStyle(landing).getPropertyValue('height'));
var html = document.getElementsByTagName('html')[0];
var htmloldFontSize = parseInt(getComputedStyle(html).getPropertyValue('font-size'));

seq();
window.addEventListener('resize', seq);

function seq() {
  index.style.minHeight = window.innerHeight - 2.8 * htmloldFontSize - 4 - landingHeight + 'px';
}

setInterval(function() {
  var htmlFontSize = parseInt(getComputedStyle(html).getPropertyValue('font-size'));
  if (htmlFontSize !== htmloldFontSize) {
    htmloldFontSize = htmlFontSize;
    seq();
  }
}, 1000);