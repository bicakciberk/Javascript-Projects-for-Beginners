let themeButton = document.querySelector("#themeButton");
let body = document.querySelector("body");

themeButton.addEventListener('click', function () {
    body.classList.toggle('dark');

    //set local storage
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    }
    else {
        localStorage.setItem('theme', 'light');
    }
});

//get local storage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
}
else {
    body.classList.remove('dark');
} 