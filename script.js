/* ===========================================
   THE WEDDING OF
   Sintia & Bagas
   =========================================== */

// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        },600);

    },1500);

});


// =========================
// BUKA UNDANGAN
// =========================

const openBtn = document.getElementById("open");
const music = document.getElementById("music");

openBtn.addEventListener("click",()=>{

    document.querySelector(".cover").style.display="none";

    music.play();

    document.body.style.overflowY="auto";

});


// =========================
// NAMA TAMU
// contoh:
// ?to=Keluarga+Bapak+Andi
// =========================

const params = new URLSearchParams(window.location.search);

const guest = params.get("to");

if(guest){

document.getElementById("guest").innerHTML = guest.replace(/\+/g," ");

}else{

document.getElementById("guest").innerHTML="Bapak/Ibu/Saudara/i";

}



// =========================
// COUNTDOWN
// =========================

const targetDate = new Date("July 26, 2026 08:00:00").getTime();

setInterval(()=>{

const now = new Date().getTime();

const distance = targetDate-now;

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;

},1000);



// =========================
// COPY REKENING
// =========================

function copyRekening(){

const rekening=document.getElementById("rekening").innerText;

navigator.clipboard.writeText(rekening);

alert("Nomor rekening berhasil disalin.");

}



// =========================
// ANIMASI SCROLL
// =========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});



// =========================
// PARALLAX COVER
// =========================

window.addEventListener("scroll",()=>{

const y=window.scrollY;

const cover=document.querySelector(".cover-image");

if(cover){

cover.style.transform="translateY("+(y*0.35)+"px)";

}

});



// =========================
// GALERI LIGHTBOX
// =========================

const images=document.querySelectorAll(".gallery-grid img");

images.forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.className="lightbox";

overlay.innerHTML=`

<img src="${img.src}">

`;

document.body.appendChild(overlay);

overlay.onclick=()=>{

overlay.remove();

}

})

});



// =========================
// ANIMASI ANGKA COUNTDOWN
// =========================

const timerBox=document.querySelectorAll("#timer div");

timerBox.forEach(box=>{

box.addEventListener("mouseenter",()=>{

box.style.transform="scale(1.08)";

});

box.addEventListener("mouseleave",()=>{

box.style.transform="scale(1)";

});

});



// =========================
// UCAPAN (sementara)
// =========================

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Terima kasih atas ucapan dan doa Anda ❤️");

form.reset();

});



// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll("a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

const href=this.getAttribute("href");

if(href.startsWith("#")){

e.preventDefault();

document.querySelector(href).scrollIntoView({

behavior:"smooth"

});

}

});

});