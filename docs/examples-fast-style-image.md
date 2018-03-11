---
id: fast-style-image-example
title: Fast Style Transfer
---

Fast Style Transfer is a machine learning technique that allows to transfer the style of one image into another one. This is a two step process, first you need to train a model on one particular style and then you can apply this style to another image. In this example we are using two pre-trained models.

You can train your own images following [this tutorial](#). 

This example is using ML5.js and [p5.js](https://p5js.org/). You can also find the same example without p5.js [here](https://github.com/ml5js/ml5-examples)

## Demo

<div id="example">
  <style>
    #example img {
      width: 250px;
      height: 250px;
    }
  </style>
</div>

<script src="assets/scripts/example-fast-style-image.js"></script>

## Code

```javascript

let inputImg;
let resultImg1;
let resultImg2;
let statusMsg;
let transferBtn;

// Create two Fast Style methods with different pre-trained models
const fs1 = new ml5.FastStyle('models/wave', modelLoaded);
const fs2 = new ml5.FastStyle('models/udnie', modelLoaded);

function setup() {
  noCanvas();
  // Status Msg
  statusMsg = createP('Loading Models...');
  
  // Transfer Button
  transferBtn = createButton('Transfer!');
  transferBtn.mousePressed(transferImages);

  // Input Image
  createP('Input Image:');
  inputImg = createImg('img/patagonia.jpg');

  // Style A
  createP('Style A: The Great Wave off Kanagawa, 1829 - Katsushika Hokusai');
  createImg('img/wave.jpg');
  resultImg1 = createImg('');

  // Style B
  createP('Style B:Udnie (Young American Girl, The Dance), 1913 - Francis Picabia');
  createImg('img/udnie.jpg');
  resultImg2 = createImg('');
  
}

// A function to be called when the models have loaded
function modelLoaded() {
  // Check if both models are loaded
  if(fs1.ready && fs2.ready){
    statusMsg.html('Ready!')
  }
}

// Apply the transfer to both images!
function transferImages() {
  statusMsg.html('Applying Style Transfer...!');

  var styleA = fs1.transfer(inputImg.elt);
  resultImg1.elt.src = styleA.src;

  var styleB = fs2.transfer(inputImg.elt);
  resultImg2.elt.src = styleB.src;

  statusMsg.html('Done!');
}
```

## [Source](https://github.com/ITPNYU/ml5/tree/master/examples/fast_style_transfer)