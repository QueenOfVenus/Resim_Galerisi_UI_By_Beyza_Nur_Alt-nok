const URL = "https://source.unsplash.com/all/";

//RANDOM 1. SAYININ ÜRETİMİ
function rastgele() {
  return Math.floor(Math.random() * 10) + 400;
}

//RANDOM 2. SAYININ ÜRETİMİ
function rastgele2() {
  return Math.floor(Math.random() * 10) + 400;
}

//RESMİN ÖLÇÜSÜNÜ ÇEKMEK İÇİN FONKSİYON OLUŞTURDUM
function UrlEki() {
  return `${rastgele()}x${rastgele2()}`
}

//RES DİVİNİ SEÇTİM VE RES SABİTİNE ATADIM
//SONRADA ROW SABİTİ OLUŞTURARAK KAÇ SATIR RESİM OLACAĞINI TANIMLADIM
const res = document.querySelector(".res");
const row = 4;

//ÇALIŞTIĞINDAN EMİN OLMAK İÇİN CONSOLEDAN ÇIKTI ALDIM
console.log(rastgele())
console.log(rastgele2())
console.log(rastgele() +"*"+ rastgele2())

//HER SÜTUNDA 3 RESİM OLACAK ŞEKİLDE DÖNGÜ AÇTIM
//VE CREATE ELEMENT İLE RESİM OLUŞTURDUM
//URL LİNKİNE RESİM BOYUTUNU EKLEDİM FOR DÖNGÜSÜ İLE TEKRARLIYOR.
for (let i = 0; i < row * 3; i++) {
  
  const img = document.createElement("img");
  img.src = `${URL}${UrlEki()}`;
  res.appendChild(img);
  console.log(rastgele() +"x"+ rastgele2());

}

//Not: İnternetten bulduğum bir kod üzerinde inceleme yağarak 
//kendi kodumu yazmaya ve kendimce yorumlamaya çalıştım.





