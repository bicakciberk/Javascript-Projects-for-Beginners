//itemleri seçme
let addButton = document.querySelector("#addButton");
let deleteButton = document.querySelector("#deleteButton");
let toDoContainer = document.querySelector("#todos");
let inputText = document.querySelector("#inputText")

//işlemler
let todo = addButton.addEventListener('click',function(){
    let paragraph = document.createElement('p');
    toDoContainer.appendChild(paragraph);
    paragraph.className="paragraf";
    paragraph.textContent = inputText.value;
    inputText.value = "";

    paragraph.addEventListener('dblclick',function(){
        paragraph.remove();
    })

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through"
    })

    deleteButton.addEventListener('click',function(){
        toDoContainer.removeChild(paragraph);
    })
});

