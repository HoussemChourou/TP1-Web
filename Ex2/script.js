let tst = document.querySelector("#tst");
const clr = document.querySelector("#clr");
const nb = document.querySelector("#nb");
const police = document.querySelector("#POLICE");

function edit (){
    tst.style.color = clr.value;
    tst.style.fontSize = nb.value+"px";
    tst.style.fontFamily = police.value;
}
clr.addEventListener("input",edit);
nb.addEventListener("input",edit);
police.addEventListener("change",edit);