var html = '';
var red;
var green;
var blue;
var rgbColor;

for (var i = 0; i < 10; i += 1) {
  red = Math.floor(Math.random() * 256 );
  green = Math.floor(Math.random() * 256 );
  blue = Math.floor(Math.random() * 256 );
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);*/




var html = '';

for (var i = 1; i <= 1000; i += 1 ){

	html += '<div>' + i + '</div>';

}



/* Execute script */
document.write(html);

