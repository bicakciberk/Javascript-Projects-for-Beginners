let images = [
    {
        'image': 'img/Oled wallpaper.jpg'
    },

    {
        'image': 'img/resim1.jpg'
    },

    {
        'image': 'img/resim3.jpg'
    },
];

let index = 0;
let slideCount = images.length;

showSlide(index);

function showSlide(i) {
    i = index;

    if (i < 0) {
        index = slideCount - 1;
    }
    if (i >= slideCount) {
        index = 0;
    }

    document.querySelector('.image').setAttribute('src', images[index].image);
}

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
    index--;
    showSlide(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
    index++;
    showSlide(index);
});
