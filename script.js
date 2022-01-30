

function dosomething(){
    swal("hurry up!", "this is our number: 574 00 63 77");
}
function order(){
    swal("Good job!", "you have ordered", "success");
}
function suborderbuttons(){
    swal("Nice Choice!", "your order is on the way", "success");
}
function feedback(){
    swal("Feedback was sent successfully!", "We will definitely share your feedback", "success");
}

let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('navigation-ul');


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
})