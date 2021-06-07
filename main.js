Webcam.set({
    width:350,
    height:300,
    image_format: "png",
    png_quality: 99
});

camera = document.getElementById("webcam");

Webcam.attach('#webcam');

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ='<img id="inputpic" src="'+data_uri+'">'
    });
}

console.log("ml5v-",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OunYAxwjg/model.json',modelLoaded);

function modelLoaded() {
    console.log("Model loaded.");
}

function idontknow() {
    blahblah = document.getElementById("inputpic");
    console.log("test");
    classifier.classify(blahblah, somefunction)

}


function somefunction(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
        document.getElementById("obj").innerHTML = "Object: "+result[0].label;
        document.getElementById("acc").innerHTML = "Accuracy: "+result[0].confidence.toFixed(1);

    }
}