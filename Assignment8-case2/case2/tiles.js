/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 8
   Case Problem 2

   Author: Jiaju Shen
   Date: 3/31/2014   

   Filename: tiles.js


   Global Variables
   flipCount
      Used to track the number of tiles currently being turned over

   firstFlip
      Used to reference the first tile turned over

   secondFlip
      Used to reference the second tile turned over


   Functions
  
   addEvent(object, evName, fnName, cap)
      Run the function fnName when the event evName occurs in object.

   randomSort(arr)
      Randomly sorts the contents of the arr array.

   setOpacity(object, value)
      Sets the opacity level of object to value

   setupTiles()
      Sets up the tiles for use in the Concentration game

   flipTile()
      Flips a tile showing the image associated with the tile

   checkTiles(tile1, tile2)
      Checks whether the tile1 image source is the same as the
      tile2 image source

   flipBack()
      Flips back flipped over tiles and resets the flipCount
      variable to 0.

   



*/


function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}

function randomSort(arr) {

   arr.sort(function () {
      return 0.5 - Math.random();
   })

}

function setOpacity(object, value) {


   // Apply the opacity value for IE and non-IE browsers
   object.style.filter = "alpha(opacity = " + value + ")";
   object.style.opacity = value/100;

}




/* Add new code below */

var flipCount = 0;
var firstFlip = new Image();
var secondFlip = new Image();

addEvent(window,"load", setupTiles, false);

function setupTiles() {
   var tiles = new Array();     // array of tile images
   for  (i = 0;i < document.images.length; i++) {  // go through all images
      image = document.images[i]; 
      if (image.className == "tile" && image.parentNode.tagName == "A") {  // must be of class tile and enclosed in <a></a>
         tiles.push(image);     // add tile to array
      }
   }

   var tileImages = new Array(tiles.length);     // array holding actual tile images
   for(j = 0; j < tileImages.length/2; j++) {
      var picture = new Image();
      picture.src = "tileImage" + j + ".jpg";
      tileImages[j] = picture;
   }
   for(n = tileImages.length/2; n < tileImages.length; n++) {
      picture = new Image();
      picture.src = "tileImage" + (n - tileImages.length/2) + ".jpg";
      tileImages[n] = picture;
   }

   randomSort(tileImages);    // randomly position the images in the array

   for(m = 0; m < tiles.length; m++) { 
      tiles[m].flipped = tileImages[m];      // custom property to reference flipped image
      addEvent(tiles[m], "click", flipTile, false);   // run flipTile whenever image is clicked
   }


   showAll = document.getElementById("showAll");
   showAll.onclick = function() {
      for(h = 0; h < tiles.length; h++) 
         tiles[h].src = tiles[h].flipped.src;
   };

   reload = document.getElementById("reload");
   reload.onclick = function() {
      location.reload();
   };
}

function flipTile() {
   if(flipCount == 0) {
      this.src = this.flipped.src;
      firstFlip = this;
      flipCount++;
   }
   else if(flipCount == 1) {
      this.src = this.flipped.src;
      secondFlip = this;
      flipCount++;
      checkTiles();
   }
}

function checkTiles() {
   if (firstFlip.src != secondFlip.src) {
      setTimeout(flipBack, 800);
   }
   else {
      flipCount = 0;
      setOpacity(firstFlip, 70);
      setOpacity(secondFlip, 70);
      firstFlip.onclick = function(){return false;};
      secondFlip.onclick = function(){return false;};
   }

}

function flipBack() {
   firstFlip.src = "tile.jpg";
   secondFlip.src = "tile.jpg";
   flipCount = 0;
}


