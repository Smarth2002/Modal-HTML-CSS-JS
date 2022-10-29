// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const openModal=document.querySelector(".modal-btn");
const closeModal=document.querySelector(".close-btn");
const modal=document.querySelector(".modal-overlay");

//by default div with modal-overlay class is hidden

//so we add the .open-modal class to div with modal-overlay class on clicking open button and remove it on clicking close btn
openModal.addEventListener("click", function(){
  
    modal.classList.add("open-modal");
});

closeModal.addEventListener("click", function (){

    modal.classList.remove("open-modal");
});