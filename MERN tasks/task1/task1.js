// select elements

const open = document.querySelector(".open")
const popup = document.querySelector(".popup")
const close = document.querySelector(".close")
const yesBtn = document.querySelector(".yes")
const noBtn = document.querySelector(".no")

open.addEventListener("click", function(){
    popup.style.display = "flex";
    open.style.display = "none";
});

close.addEventListener("click", function(){
    popup.style.display = "none";
    open.style.display = "block";
});

yesBtn.addEventListener("click", function(){
    popup.style.display = "none";
    open.style.display = "block";
});

noBtn.addEventListener("click", function(){
    popup.style.display = "none";
    open.style.display = "block";
});


// Selecting the elements
// const openBtn = document.querySelector(".open");
// const popup = document.querySelector(".popup");
// const closeBtn = document.querySelector(".close");
// const yesBtn = document.querySelector(".yes");
// const noBtn = document.querySelector(".no");

// Open the popup
// openBtn.addEventListener("click", function () {
//     popup.style.display = "flex";
//     openBtn.style.display = "none";
// });

// // Close popup when X is clicked
// closeBtn.addEventListener("click", function () {
//     popup.style.display = "none";
//     openBtn.style.display = "block";
// });

// // Close popup when Yes is clicked
// yesBtn.addEventListener("click", function () {
//     popup.style.display = "none";
//     openBtn.style.display = "block";
// });

// // Close popup when No is clicked
// noBtn.addEventListener("click", function () {
//     popup.style.display = "none";
//     openBtn.style.display = "block";
// });