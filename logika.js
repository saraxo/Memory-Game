const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".glavni-dio");

navToggle.addEventListener('click', function(){
  links.classList.toggle("prikazi-traku"); 
});

var modal1 = document.getElementById("myModal1");
var dugme1 = document.getElementById("nova-igra");
var span1 = document.getElementsByClassName("zatvori2")[0];
dugme1.onclick = function() {
  modal1.style.display = "block";
};
span1.onclick = function() {
  modal1.style.display = "none";
};
window.onclick = function(event) {
  if (event.target === modal1) {
    modal1.style.display = "none";
  }
};

var modal = document.getElementById("myModal");
var btn = document.getElementById("o-projektu");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
var modal2 = document.getElementById("myModal2");
var dugme2 = document.getElementById("upute");
var span2 = document.getElementsByClassName("zatvori")[0];
dugme2.onclick = function() {
  modal2.style.display = "block";
};
span2.onclick = function() {
  modal2.style.display = "none";
};
window.onclick = function(event) {
  if (event.target === modal1) {
    modal2.style.display = "none";
  }
};


function igra(folder){
    
    const karta = document.querySelectorAll('.karta');
    let karta1, karta2;
    let disablePloca = false;
    let uparena = 0;
    let ukupnoVrijeme=0;
    let brojPoteza=0;
    let pocetnoVrijeme,krajnjeVrijeme=0;
    
    function flipCard(e){
        let izabranaKarta = e.target; 

        if(izabranaKarta !== karta1 && !disablePloca){
            izabranaKarta.classList.add('flip');

            if(!karta1){
                return karta1 = izabranaKarta; 
            }
            karta2 = izabranaKarta;
            disablePloca = true;
            brojPoteza++;
            let kartaPrvaImg = karta1.querySelector('img').src,
            kartaDrugaImg = karta2.querySelector('img').src;
            poklapanjeKarti(kartaPrvaImg, kartaDrugaImg);
            }
        };

    function poklapanjeKarti(img1, img2){
        
        if(img1 === img2){
            uparena++; 
            if(uparena=== 8){ 
                krajnjeVrijeme=Date.now();
                ukupnoVrijeme=(krajnjeVrijeme-pocetnoVrijeme)/1000;

                let info = document.querySelector('.info');
                info.innerHTML=`Pobijedili ste!<br> Broj poteza: ${brojPoteza}<br> Potrebno vrijeme: ${ukupnoVrijeme} sec <br> <button id="igrajPonovo";">Igraj ponovo!</button>`;
                
                document.querySelector('#igrajPonovo').addEventListener('click', promijesajKarte);
            }
             karta1.removeEventListener('click', flipCard);
             karta2.removeEventListener('click', flipCard);
             karta1 = karta2 = '';
             return disablePloca = false;
        }
          else{
            setTimeout(() => {
                karta1.classList.remove('flip');
                karta2.classList.remove('flip');
                karta1 = karta2 = '';
                disablePloca = false;
                }, 1000);
            }
        };

    function promijesajKarte(){
            
        ukupnoVrijeme=0;
        brojPoteza=0;
        pocetnoVrijeme=Date.now();
        let info = document.querySelector('.info');
        info.innerHTML='';
        uparena = 0;
        karta1 = karta2 = '';
                
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
        for(let i=arr.length-1;i>0;i--){
            j=Math.floor(Math.random()*i)
            k=arr[i]
            arr[i]=arr[j]
            arr[j]=k;
        }

        karta.forEach((card, index) => {
            card.classList.remove('flip');
            card.addEventListener('click', flipCard);
                let imgTag = card.querySelector('img');
                imgTag.src = `${folder}/img-${arr[index]}.jpg`;
            });
    };
        
    promijesajKarte();
    pocetnoVrijeme=Date.now();

    karta.forEach(card => {
        card.addEventListener('click', flipCard);
    });
};

function prva_opcija(){
    igra("img");
    document.getElementById("myModal1").style.display = "none";
};
function druga_opcija(){
    igra("img2");
    document.getElementById("myModal1").style.display = "none";
};
function treca_opcija(){
    igra("img3");
    document.getElementById("myModal1").style.display = "none";
};
