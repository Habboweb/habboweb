function pato(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('dec').src="img/dec/1.png"
  }
}
function skate(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('dec').src="img/dec/2.png"
  }
}
function barril(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('dec').src="img/dec/3.png"
  }
}
function cake(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('dec').src="img/dec/4.png"
  }
}
function monster(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('dec').src="img/dec/5.png"
  }
}
function chair(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('dec').src="img/dec/6.png"
  }
}
function dino(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('dec').src="img/dec/7.png"
  }
}
function dec8(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('dec').src="img/dec/8.png"
  }
}
function band1(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('flag').src="img/flags/1.png"
  }
}
function band2(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('flag').src="img/flags/2.png"
  }
}
function band3(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('flag').src="img/flags/3.png"
  }
}
function carp1(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('carpet').src="img/ground/1.png"
  }
}
function carp2(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('carpet').src="img/ground/2.png"
  }
}
function carp3(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('carpet').src="img/ground/3.png"
  }
}
function carp4(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('carpet').src="img/ground/4.png"
  }
}
function carp5(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('carpet').src="img/ground/5.png"
  }
}
function band4(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('flag').src="img/flags/4.png"
  }
}
function band5(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('flag').src="img/flags/5.png"
  }
}
function hide(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('sumir').style.opacity="0";
  }
  else{
    document.getElementById('sumir').style.opacity="1"
  }
}
function red(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('fundo').src="img/fundoRed.png"
  }
}
function blue(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('fundo').src="img/fundoBlue.png"
  }
}
function yellow(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('fundo').src="img/fundoYellow.png"
  }
}
function pink(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('fundo').src="img/fundoPink.png"
  }
}
function orange(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('fundo').src="img/fundoOrange.png"
  }
}
function green(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('fundo').src="img/fundoGreen.png"
  }
}
function band5(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('flag').src="img/flags/5.png"
  }
}
function band6(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('flag').src="img/flags/6.png"
  }
}
function band7(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('flag').src="img/flags/7.png"
  }
}
function band8(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('flag').src="img/flags/8.png"
  }
}
function cama1(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('cama').src="img/camas/1.png"
  }
}
function cama2(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('cama').src="img/camas/2.png"
  }
}
function cama3(){
  if(document.getElementById('sumir').style.opacity=="1"){
    document.getElementById('cama').src="img/camas/3.png"
  }
// Trocar Musica da Jukebox
}
function Music(msc){

}

// Mudar imagem em relaçao ao tempo
let img = document.querySelector('#imagem');
let pet = document.querySelector('#imagem-pet');
let tempo = 5;
let imgs = [];
let pets = [];
let nmrIMG = 0;
let somQueEstaTocando = null;

imgs[0] = "img/inicio/habbo-inicio-1.jpg";
imgs[1] = "img/inicio/habbo-inicio-2.jpg";
imgs[2] = "img/inicio/habbo-inicio-3.jpg";
imgs[3] = "img/inicio/habbo-inicio-4.jpg";


pets[0] = "img/pets/pet-1.png";
pets[1] = "img/pets/pet-2.png";
pets[2] = "img/pets/pet-3.png";
pets[3] = "img/pets/pet-4.png";



function mudarImagem(){
  if(img==null) {
    return;
  }
  img.src=imgs[nmrIMG++];
  pet.src=pets[nmrIMG++];
  if(nmrIMG>=imgs.length){
    nmrIMG = 0;
  }
  setTimeout("mudarImagem()", tempo * 1000);
}
mudarImagem();


let botoesMusica = document.querySelectorAll(".Music-button");

for(let i=0;i<botoesMusica.length;i++){
  botoesMusica[i].addEventListener('click',tocaMusica);
}

function tocaMusica(evento){
  let botaoClicadoEl = evento.currentTarget;
  let caminhoParaMusica = botaoClicadoEl.dataset.musica;
  if(somQueEstaTocando != null){
    somQueEstaTocando.pause();
  }
  else{
    somQueEstaTocando = new Audio();
  }
  somQueEstaTocando.src= caminhoParaMusica;
  somQueEstaTocando.play();


}
