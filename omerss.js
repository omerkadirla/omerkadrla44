document.getElementById("listeMaas").addEventListener("change",maasHesaplama);
function maasHesaplama(){
    var number=document.getElementById("listeMaas");
    var secılenYılMaas=number.options[listeMaas.selectedIndex].value;
    var sonuc=secılenYılMaas*2.8;
    document.getElementById("sonuc").innerHTML="Bu Yılki Maaş Zammı = "+sonuc.toFixed(2)+" TL";
}