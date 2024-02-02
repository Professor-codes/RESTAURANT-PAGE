let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let food3s = document.getElementById('food3');
let foods = document.getElementById('food');

food1s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('/Image/item1.png')";
})

food2s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('/Image/item2.png')";
})

food3s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('/Image/item3.png')";
})

