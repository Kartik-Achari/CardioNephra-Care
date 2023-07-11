function getData_k(){
    var age = document.getElementById("age").value;
    var bp = document.getElementById("bp").value;
    var bgr = document.getElementById("bgr").value;
    var bu = document.getElementById("bu").value;
    var sc = document.getElementById("sc").value;
    var pot = document.getElementById("pot").value;
    var wc = document.getElementById("wc").value;

    localStorage.setItem("value_k1",age);
    localStorage.setItem("value_k2",bp);
    localStorage.setItem("value_k9",bgr);
    localStorage.setItem("value_k10",bu);
    localStorage.setItem("value_k11",sc);
    localStorage.setItem("value_k12",pot);
    localStorage.setItem("value_k13",wc);
}

function getData_k1(k1){
    var al = k1.options[k1.selectedIndex].text;
    localStorage.setItem("value_k3",al);
}

function getData_k2(k2){
    var su = k2.options[k2.selectedIndex].text;
    localStorage.setItem("value_k4",su);
}

function getData_k3(k3){
    var rbc = k3.options[k3.selectedIndex].text;
    localStorage.setItem("value_k5",rbc);
}

function getData_k4(k4){
    var pc = k4.options[k4.selectedIndex].text;
    localStorage.setItem("value_k6",pc);
}

function getData_k5(k5){
    var pcc = k5.options[k5.selectedIndex].text;
    localStorage.setItem("value_k7",pcc);
}

function getData_k6(k6){
    var ba = k6.options[k6.selectedIndex].text;
    localStorage.setItem("value_k8",ba);
}

function getData_k7(k7){
    var htn = k7.options[k7.selectedIndex].text;
    localStorage.setItem("value_k14",htn);
}

function getData_k8(k8){
    var dm = k8.options[k8.selectedIndex].text;
    localStorage.setItem("value_k15",dm);
}

function getData_k9(k9){
    var cad = k9.options[k9.selectedIndex].text;
    localStorage.setItem("value_k16",cad);
}

function getData_k10(k10){
    var pe = k10.options[k10.selectedIndex].text;
    localStorage.setItem("value_k17",pe);
}

function getData_k11(k11){
    var ane = k11.options[k11.selectedIndex].text;
    localStorage.setItem("value_k18",ane);
}