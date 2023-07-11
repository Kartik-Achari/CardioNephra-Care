function getData_home1(){
    var patient_name_h = document.getElementById("patient_name_h").value;
    var referred_doc_h = document.getElementById("referred_doc_h").value;

    localStorage.setItem("ph",patient_name_h);
    localStorage.setItem("dh",referred_doc_h);
}

function getData_home2(){
    var patient_name_k = document.getElementById("patient_name_k").value;
    var referred_doc_k = document.getElementById("referred_doc_k").value;

    localStorage.setItem("pk",patient_name_k);
    localStorage.setItem("dk",referred_doc_k);
}

function getData_li(){
    var username = document.getElementById("username").value;

    localStorage.setItem("li",username);
}