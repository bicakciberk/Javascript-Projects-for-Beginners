let selectButton = document.querySelector("#selectButton");
let inputWidth = document.querySelector("#inputWidth");
let inputHeight = document.querySelector("#inputHeight");
let containerImage = document.querySelector(".containerImage");
let calculateButton = document.querySelector("#calculateButton");
let createImg;

selectButton.addEventListener('click',function(){
    let input = document.createElement('input');
    input.type="file";
    input.click();
    createImg = document.createElement('img');
    createImg.className='image';
    containerImage.appendChild(createImg);

    input.addEventListener('change',function(){
        createImg.src=URL.createObjectURL(input.files[0]);
    });
});

calculateButton.addEventListener('click', function(){
    let degerY = inputHeight.value;
    let degerX = inputWidth.value;

    createImg.style.height=degerY;
    createImg.style.width= degerX;
});
