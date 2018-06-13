let classifier;
let video;

function setup() {
  noCanvas();
  // Create a camera input
  video = createCapture(VIDEO).parent('videoContainer');
  video.size(400, 400);
  // Initialize the Image Classifier method with Mobilenet and the video as the second argument
  classifier = ml5.imageClassifier('Mobilenet', video);
  // Call the classifyFrame function to start classifying the video
  classifyVideo();
}

// Get a prediction for the current video frame
function classifyVideo() {
  classifier.predict(gotResult);
  // You can also specify the amount of classes detected you want
  // classifier.predict(10, gotResult)
}

// When we get a result
function gotResult(results) {
  // The results are in an array ordered by probability.
  select('#result').html(results[0].className);
  select('#probability').html(nf(results[0].probability, 0, 2));
  classifyVideo();
}