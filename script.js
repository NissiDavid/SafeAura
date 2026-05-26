function saveContact(){
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;

    if(name === "" || number === ""){
        document.getElementById("output").innerHTML = "Please fill all details";
    } else {
        document.getElementById("output").innerHTML =
        "Trusted Contact Saved: " + name + " - " + number;
    }
}
 function sosAlert(){
    let siren = document.getElementById("sirenSound");

    siren.play();

    alert("Emergency SOS Activated!");
}
function fakeCall(){
     document.getElementById("fakeScreen").style.display = "block";
}
function endCall(){
    document.getElementById("fakeScreen").style.display ="none";
}
function getLocation(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(showPosition);

    }

    else{

        document.getElementById("output").innerHTML =
        "Geolocation not supported";

    }

}

function showPosition(position){

    let lat = position.coords.latitude;

    let lon = position.coords.longitude;

    document.getElementById("output").innerHTML =
    "YOUR TRUSTED CONTACT CAN TRACK YOUR LOCATION NOW";

}
 function updateClock(){

    let now = new Date();

    document.getElementById("clock").innerHTML =
    now.toLocaleString();

}

updateClock();

setInterval(updateClock,1000);
