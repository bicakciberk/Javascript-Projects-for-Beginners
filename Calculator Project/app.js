const screen = document.querySelector('#screen');
const btn = document.querySelectorAll('.btn');

let calculate = [];


btn.forEach((btn) => {
    btn.addEventListener('click', function () {
        let value = btn.textContent;
        if (btn.textContent === 'C') {
            calculate = [];
            screen.textContent = '0';
        } else if (btn.textContent === '=') {
            screen.textContent = eval(calculate.join(''))
            calculate = []
            calculate.push(screen.textContent)//yeni eklendi
            console.log(calculate)
        } else {
            calculate.push(value)
            let newArray = calculate.join('')
            screen.textContent = newArray;
        }


    })
})