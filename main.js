function start_classification(){
navigator.mediaDevices.getUserMedia({audio: true, video:false})
classifier =
 ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json',modelReady);
}
function modelReady(){
classifier.classify(gotResult);
}
function gotResult(error, results) {
if (error) {
console.log("Error");
}
else{
console.log(results);
r=Math.floor(Math.random()*255)+1;
console.log(r);
g=Math.floor(Math.random()*255)+1;
b=Math.floor(Math.random()*255)+1;
document.getElementById("hearing").innerHTML="I Can Hear"+ results[0].label;
document.getElementById("hearing").style.color="rgb("+r+","+g+","+b+")";
document.getElementById("accuracy").innerHTML=(results[0].confidence*100).toFixed(2)+"%";
//document.getElementById("hearing").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
}
}