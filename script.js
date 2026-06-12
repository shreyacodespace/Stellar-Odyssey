function launchRocket() {
    console.log("Button clicked");}

    let velocity =
    Number(document.getElementById("velocity").value);

    let angle =
    Number(document.getElementById("angle").value);

    let g = 9.8;

    let angleRad =
    angle * Math.PI / 180;

    let maxHeight =
    (velocity * velocity *
    Math.sin(angleRad) *
    Math.sin(angleRad))
    / (2 * g);

    let flightTime =
    (2 * velocity *
    Math.sin(angleRad))
    / g;

    let range =
    (velocity * velocity *
    Math.sin(2 * angleRad))
    / g;

    document.getElementById("maxHeight")
    .innerHTML =
    "Maximum Height: " +
    maxHeight.toFixed(2) + " m";

    document.getElementById("flightTime")
    .innerHTML =
    "Time of Flight: " +
    flightTime.toFixed(2) + " s";

    document.getElementById("range")
    .innerHTML =
    "Range: " +
    range.toFixed(2) + " m";
}
