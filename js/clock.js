let isim= prompt("Lütfen isminizi giriniz: ");
const isimKoy=document.getElementById("myName").innerHTML=isim.toUpperCase();

function tarihSaat() {
    var date = new Date().toLocaleString();
    document.querySelector("#myClock").innerHTML = date;
}


const d = new Date();
const days = ["PAZAR", "PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ"];
document.querySelector("#myDay").innerHTML = days[d.getDay()];


setInterval(tarihSaat, 1000); 