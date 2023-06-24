const btn = document.querySelectorAll('.btn')
const setup = document.querySelector('#setup')
const punchline = document.querySelector('#punchline')
const id = document.querySelector('#id')
const type = document.querySelector('#type')


function getData() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setup.textContent = data.setup;
            punchline.textContent = data.punchline;
            id.textContent = '#' + ' ' + data.id;
            type.textContent = data.type;
        })
}

btn.forEach((btn)=>{
    btn.addEventListener('click',function(){
        getData()
    })
})