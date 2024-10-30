// link return systems to definitions
// convert degrees to radians

document.getElementById("heron").addEventListener("click", function () {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    document.getElementById("heroAns").value = heronFormula(a, b, c);

});

document.getElementById("amb").addEventListener("click", ambiguousCase);

document.getElementById("newton").addEventListener("click", function () {
    const g = document.getElementById("guess")
    document.getElementById("approx").value = newtonMethod(g);

});


function heronFormula(a, b, c) {
    
    if (a > 0 && b > 0 && c > 0) {
        const radicand = 4 * a * a * b * b - Math.pow(a * a + b * b - c * c, 2);

        if (radicand > 0) {
            return Math.round(100 * Math.sqrt(radicand) / 4) / 100;
        }
    }
    return "This triangle does not exist.";

}



function ambiguousCase() {
    const angleA = document.getElementById("angle").value;
    const a = document.getElementById("sideA").value;
    const b = document.getElementById("sideB").value;
    const h = b * Math.sin(angleA);
    const answer = document.getElementById("ambAns");

    // if the angle is greater than 180 there is no triangle 
    if (angleA >= Math.PI || angleA <= 0) {
        answer.value = "No triangles exist";
    } else if (angleA < Math.PI / 2) {
        if (a < h) {
            answer.value = "No triangles exist";
        } else if (a == h) {
            answer.value = "One right angled triangle exists";
        } else if (a >= b) { //if a=b, then it must be an isoceles triangle where angleA=angleB
            answer.value = "One triangle exists";
        } else {
            answer.value = "Two triangles exists (ambiguous case)";
        }
    } else if (angleA > Math.PI / 2) {
        if (a <= b) {
            answer.value = "No triangles exist";
        } else {
            answer.value = "One obtuse triangle exists";
        }
    } else { //if the angle entered is 90 degrees
        if (a > b) {
            answer.value = "One right angle triangle exists";
        } else {
            answer.value = "No triangles exist";
        }
    }

    return;
}

function newtonMethod(g) {

    const original = 6*Math.pow(g,4) - 13*Math.pow(g,3) - 18*Math.pow(g,2) + 7*g + 6;
    const deriv = 24*Math.pow(g,3) - 39*Math.pow(g,2) -36*g +7;

    const approx = g - original/deriv;

    while(g-approx>0.0001 ){

    }

    return;
}