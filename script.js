Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
})
camera = document.getElementById("camera");
Webcam.attach("#camera");

function capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_image' src = ' " + data_uri + " '>";
    });

}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Zv-f7yRLo/", modelLoaded)

function modelLoaded() {
    console.log('Model Loaded!');
}

function Identify() {
    img = document.getElementById("captured image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("objectName").innerHTML = results[0].label;
        document.getElementById("objectAccuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}