var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
var Ltop = 41.788102
var Lright = -88.351400
var Lleft = -88.357063
var Lbottom = 41.784675


var img = document.getElementById("img")
var wWidth = img.offsetWidth
var wHeight = 362*(img.offsetWidth/462)

var scaleX = wWidth/(Math.abs(Lright-Lleft))
var scaleY = wHeight/(Ltop-Lbottom)

function showPosition(position) {
    var pX = scaleX * (Math.abs(position.coords.longitude-Lleft))
    
    var pY = scaleY * (Ltop - position.coords.latitude)

    console.log("wWidth: " + wWidth)
    console.log("wHeight: " + wHeight)
    console.log("scaleX: " + scaleX)
    console.log("scaleY: " + scaleY)
    console.log("position Lon: " + position.coords.longitude)
    console.log("position Lat: " + position.coords.latitude)
    console.log("pX: " + pX)
    console.log("pY: " + pY)

    document.getElementById("circle").style.top = pY + "px";
    document.getElementById("circle").style.left = pX + "px";
}

window.addEventListener("load", getLocation())

window.addEventListener("resize", () => {
    img = document.getElementById("img")
    wWidth = img.offsetWidth
    wHeight = 362*(img.offsetWidth/462)

    scaleX = wWidth/(Math.abs(Lright-Lleft))
    scaleY = wHeight/(Ltop-Lbottom)
    getLocation()
})

var map = new Map();
map.set("target", [1, 2])

console.log(map.get("target")[0])