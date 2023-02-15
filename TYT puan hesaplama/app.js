//tanımlama
let turkceD = document.querySelector("#turkceD");
let turkceY = document.querySelector("#turkceY");
let sosyalD = document.querySelector("#sosyalD");
let sosyalY = document.querySelector("#sosyalY");
let matematikD = document.querySelector("#matematikD");
let matematikY = document.querySelector("#matematikY");
let fenD = document.querySelector("#fenD");
let fenY = document.querySelector("#fenY");
let toplamD = document.querySelector("#toplamD");
let toplamY = document.querySelector("#toplamY");
let TYTpuan = document.querySelector("#puan");
let okulPuaniInput = document.querySelector("#okulPuani");
let hesapla = document.querySelector("#hesapla");

//hesaplama
//100 puanı ÖSYM veriyor
// Okul puanı max 60 veriyor.
//mesela 30 doğru 8 yanlışı var.
//kalan doğru sayısını bulmak için "yanlış sayısı/4" yapıyoruz.
//puan için ise "(kalanDoğruSayısı*4)" yapıyoruz.
//obp = (obp*5)/0.12

hesapla.addEventListener('click', function(){
    toplamD.innerHTML = Number((turkceD.value)) + Number((matematikD.value)) + Number((sosyalD.value)) + Number((fenD.value));
    toplamY.innerHTML = Number((turkceY.value)) + Number((matematikY.value)) + Number((sosyalY.value)) + Number((fenY.value));
    let kalanDoğruSayisi = Number((toplamD.innerHTML) - Number(toplamY.innerHTML) / 4);

    puanHesaplama()
    function puanHesaplama(){
        okulPuani=Number(((okulPuani.value)*5)*0.12);
        if(okulPuani>=60){
            okulPuani=60;
        }

        TYTpuan.innerHTML = Number(kalanDoğruSayisi*4)+okulPuani+100;
    }
   
})
    