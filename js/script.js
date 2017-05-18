

var price;
while ( tel !==16 && tel !==32 && tel !==64) {

  var tel = +prompt ( " Вбудована пам'ять: 16ГБ, 32ГБ, 64ГБ ?" )
}
if ( tel==16 ) {
   price =  100;
} else if ( tel==32 ) {
  price =  200;
} else if ( tel==64 ) {
  price =  300;
}

while ( col !== 'gold' && col !== 'black' && col !== 'gray')
  var col = prompt ( "Оберіть колір: black, gold, gray" )
var img = document.createElement('img');
if (  col == 'black') {
  img.src= 'img/black.jpg';
} else if ( col == 'gold') {
  img.src= 'img/gold.jpg';
} else if ( col == 'gray') {
  img.src= 'img/gray.jpg';
};

var parentElem = document.body;
parentElem.appendChild ( img );
document.write ('$' + price );
