
document.getElementById("heron").addEventListener("click", heronFormula);
document.getElementById("amb").addEventListener("click", ambiguousCase);

function heronFormula() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    
    if (a > 0 && b >0 && c >0) {
        const radicand = 4 * a*a * b*b - Math.pow(a*a + b*b - c*c, 2);

        if (radicand > 0) {
            document.getElementById("heroAns").value = Math.round(100*Math.sqrt(radicand) / 4) /100;
        }else {
            document.getElementById("heroAns").value = "This triangle does not exist.";
        }
    }else{
        document.getElementById("heroAns").value ="This triangle does not exist.";
    }

    return;
}



function ambiguousCase(){
    const angleA = document.getElementById("angle").value;
    const a = document.getElementById("sideA").value;
    const b = document.getElementById("sideB").value;
    const h = b * Math.sin(angleA);
    const answer = document.getElementById("ambAns");
  
    // if the angle is greater than 180 there is no triangle 
    if(angleA>=Math.PI){
        answer.value="No triangles exist";
    }else if (angleA < Math.PI/2){
        if(a<h){
            answer.value="No triangles exist";
        }else if(a==h){
            answer.value="One right angled triangle exists";
        }else if(a>=b){ //if a=b, then it must be an isoceles triangle where angleA=angleB
            answer.value="One triangle exists";
        }else{
            answer.value ="Two triangles exists (ambiguous case)";
        }
    }else if (angleA > Math.PI/2){
        if(a<=b){
            answer.value = "No triangles exist";
        }else{
            answer.value = "One obtuse triangle exists";
        }
    }else{ //if the angle entered is 90 degrees
        if(a>b){
            answer.value ="One right angle triangle exists";
        }else{
            answer.value="No triangles exist";
        }
    }
    
    return;
}

