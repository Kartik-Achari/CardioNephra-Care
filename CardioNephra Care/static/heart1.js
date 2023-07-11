function getData_h(){
    var age_h = document.getElementById("age_h").value;
    var trestbps = document.getElementById("trestbps").value;
    var chol = document.getElementById("chol").value;
    var thalach = document.getElementById("thalach").value;
    var oldpeak = document.getElementById("oldpeak").value;

    localStorage.setItem("val1",age_h);
    localStorage.setItem("val4",trestbps);
    localStorage.setItem("val5",chol);
    localStorage.setItem("val8",thalach);
    localStorage.setItem("val10",oldpeak);
}

function getData_h1(a1)
{
    var gender_h = a1.options[a1.selectedIndex].text;
    localStorage.setItem("val2", gender_h);   
}

function getData_h2(a2)
{
    var cp = a2.options[a2.selectedIndex].text;
    localStorage.setItem("val3", cp);   
}

function getData_h3(a3)
{
    var fbs = a3.options[a3.selectedIndex].text;
    localStorage.setItem("val6", fbs);   
}

function getData_h4(a4)
{
    var restecg = a4.options[a4.selectedIndex].text;
    localStorage.setItem("val7", restecg);   
}

function getData_h5(a5)
{
    var exang = a5.options[a5.selectedIndex].text;
    localStorage.setItem("val9", exang);   
}

function getData_h6(a6)
{
    var slope = a6.options[a6.selectedIndex].text;
    localStorage.setItem("val11", slope);   
}

function getData_h7(a7)
{
    var ca = a7.options[a7.selectedIndex].text;
    localStorage.setItem("val12", ca);   
}

function getData_h8(a8)
{
    var thal = a8.options[a8.selectedIndex].text;
    localStorage.setItem("val13", thal);   
}