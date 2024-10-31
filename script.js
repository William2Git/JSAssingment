// link return systems to definitions
// convert degrees to radians
//create text overflow bar for amb case poly function

document.getElementById("heron").addEventListener("click", function () {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    document.getElementById("heroAns").value = heronFormula(a, b, c);

});

document.getElementById("amb").addEventListener("click", ambiguousCase);

document.getElementById("newton").addEventListener("click", function () {
    const g = document.getElementById("guess").value;
    document.getElementById("approx").value = newtonMethod(g);

});

document.getElementById("poly").addEventListener("click", function () {
    const coefficients = document.getElementById("coeff").value.split(" ");
    const exponents = document.getElementById("expo").value.split(" ");

    console.log(coefficients);
    console.log(exponents);
    const xValue = document.getElementById("x").value;

    if (coefficients.length != exponents.length) {
        document.getElementById("equation").value = "Please enter an equal number of coefficients and exponents";
        return;
    }

    document.getElementById("equation").value = polynomialEqn(coefficients, exponents, xValue);
    document.getElementById("eval").value = polynomialEval();


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

    let guess = g, root = g;

    do {
        guess = root;
        let original = 6 * Math.pow(guess, 4) - 13 * Math.pow(guess, 3) - 18 * Math.pow(guess, 2) + 7 * guess + 6;
        let derivative = 24 * Math.pow(guess, 3) - 39 * Math.pow(guess, 2) - 36 * guess + 7;

        root = guess - original / derivative;
    } while (Math.abs(guess - root) > 0.0001)

    return Math.round(root * 10000) / 10000;
}


function polynomialEqn(coeff, expo, x) {
    let equation = [];
    let constant = 0;

    for (let i = 0; i < coeff.length; i++) {
        if (coeff[i] == 0) {
            continue;
        }
        if (expo[i] == 0) {
            constant++;
            continue;
        }


        if (equation.length == 0) {
            equation.push(coeff[i], expo[i]);
        }else {
            //sorts the terms so that the polynomial is arranged from highest power to lowest


            if (expo[i] > equation[1]) {
                equation.unshift(coeff[i], expo[i]);
            } else if (expo[i] < equation[equation.length -1]) {
                equation.push(coeff[i], expo[i]);
            }
            
        }


        console.log(i);


        // if(coeff[i]==0){
        //     equation+="+"
        //     continue;
        // }

        // equation+= `${coeff[i]}x^${expo[i]}`;
        // if(i<coeff.length -1 && coeff[i+1]>0){
        //     equation+="+";
        // }

    }

    for (let i = 0; i < equation.length; i++) {

    }

    console.log(equation);
    return equation;
}

function polynomialEval() {
    return;
}