let addButton = document.querySelector("#addButton");
let imageRow = document.querySelector("#col");


addButton.addEventListener('click', function () {
    let input = document.createElement('input');
    input.type = "file";


    input.addEventListener('change', function () {
        let image = document.createElement('img');
        image.className = "resim";
        image.style.width = "400px";
        image.style.height = "400px";
        image.src = URL.createObjectURL(input.files[0]);
        row.appendChild(image);
    });
    input.click();
});
