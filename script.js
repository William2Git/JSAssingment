

document.getElementById("heron").addEventListener("click", function () {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    document.getElementById("heroAns").value = heronFormula(a, b, c);

});

document.getElementById("amb").addEventListener("click", function(){
    const angleA = Math.PI *document.getElementById("angle").value/180;
    const a = document.getElementById("sideA").value;
    const b = document.getElementById("sideB").value;

    document.getElementById("ambAns").value=ambiguousCase(angleA,a,b);
});

document.getElementById("newton").addEventListener("click", function () {
    const g = document.getElementById("guess").value;
    document.getElementById("approx").value = newtonMethod(g);

});

document.getElementById("poly").addEventListener("click", function () {
    const coefficients = document.getElementById("coeff").value.trim().split(" ");
    const exponents = document.getElementById("expo").value.trim().split(" ");
    const xValue = document.getElementById("x").value;

    if (coefficients.length != exponents.length) {
        document.getElementById("equation").value = "Please enter an equal number of coefficients and exponents";
        return;
    }

    const answer =polynomialEqn(coefficients, exponents, xValue);
    document.getElementById("equation").value = answer[0];
    document.getElementById("eval").value= answer[1];
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

function ambiguousCase(angle,a,b) {
    
    const h = Math.round(1000*b * Math.sin(angle))/1000;

    // if the angle is greater than 180 there is no triangle 
    if (angle >= Math.PI || angle <= 0) {
        return "No triangles exist";
    } else if (angle < Math.PI / 2) {
        if (a < h) {
            return "No triangles exist";
        } else if (a == h) {
            return "One right angled triangle exists";
        } else if (a >= b) { //if a=b, then it must be an isoceles triangle where angleA=angleB
            return "One triangle exists";
        } else {
            return "Two triangles exists (ambiguous case)";
        }
    } else if (angle > Math.PI / 2) {
        if (a <= b) {
            return "No triangles exist";
        } else {
            return "One obtuse triangle exists";
        }
    } else { //if the angle entered is 90 degrees
        if (a > b) {
            return "One right angle triangle exists";
        } else {
            return "No triangles exist";
        }
    }

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
    let coeffExpo =[];
    let constant =0;
    let answer=["f(x) = ", 0];
    //sorts the exponents so they are organized from highest power to lowest power
    for (let i=0;i<expo.length;i++){
        coeffExpo[i]=[];
        coeffExpo[i][0]=parseFloat(expo[i]);
        coeffExpo[i][1]=parseFloat(coeff[i]);
    }

    coeffExpo.sort(function(a,b){
        return b[0]-a[0];
    });

    for(let i= 0; i<coeffExpo.length;i++){
        //if exponent is zero, add that to constant value
        if(coeffExpo[i][0]==0){
            constant+= parseFloat(coeffExpo[i][1]);
            continue;
        }
        //if coefficient is zero, do not include the term in the equation
        if(coeffExpo[i][1]==0){
            continue;
        }

        //if coefficient is positive, put a plus sign
        if(i>0 && coeffExpo[i][1]>0){
            answer[0]+="+";
        }

        answer[0]+= `${coeffExpo[i][1]}x^${coeffExpo[i][0]} `;
        answer[1]+= coeffExpo[i][1] * Math.pow(x, coeffExpo[i][0]);

    }

    if(constant !=0){
        answer[0]+=`+${constant}`;
    }
    answer[1]= `f(${x}) = ${answer[1]+constant}`;

    return answer;
}
