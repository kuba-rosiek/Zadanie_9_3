// scripts.js
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var textCharsAfter = text.replace('Velociraptor', 'Dinosaur');
var textCharsAfterLength = text.length/2;
var partOfText = textCharsAfter.slice(0, textCharsAfterLength);
console.log(partOfText);
