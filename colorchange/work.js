const boxes = document.querySelectorAll('.box');
const hold = document.querySelector('body');

boxes.forEach(function (l) {
    l.addEventListener('click', function (e) {
        if (e.target.id == "yellow") {
            hold.style.backgroundColor = e.target.id;
        }
        if (e.target.id == "blue") {
            hold.style.backgroundColor = e.target.id;
        }
        if (e.target.id == "green") {
            hold.style.backgroundColor = e.target.id;
        }
        if (e.target.id == "pink") {
            hold.style.backgroundColor = e.target.id;
        }
})
})