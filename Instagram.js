const spn1 = document.getElementById("spn")
const spn2 = document.getElementById("spn2")
const input = document.getElementById("txt");
const input2 = document.getElementById("pass");
input.addEventListener('input', updatevalue);
input2.addEventListener('input', updatevalue2);

function myFunction() {
    spn1.style.fontSize = "10px"
    spn1.style.lineHeight = "16px"
}
function rest() {
    spn1.style.fontSize = ""
    spn1.style.lineHeight = ""
}

function updatevalue(e) {
    if (input.value) {
        myFunction()
    }
    else {
        rest()
    }
}

function myFunction2() {
    spn2.style.fontSize = "10px"
    spn2.style.lineHeight = "16px"
}
function rest2() {
    spn2.style.fontSize = ""
    spn2.style.lineHeight = ""
}

function updatevalue2(e) {
    if (input2.value) {
        myFunction2()
    }
    else {
        rest2()
    }
}