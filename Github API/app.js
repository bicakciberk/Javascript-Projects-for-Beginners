const btn = document.querySelector('#btn')
const search = document.querySelector('#search')
const img = document.querySelector('#img')
const username = document.querySelector('#username')
const fullName = document.querySelector('#fullName')
const followers = document.querySelector('#followers')
const following = document.querySelector('#following')
const repos = document.querySelector('#repos')
const blog = document.querySelector('#blog')
const bio = document.querySelector('#bio')
const main = document.querySelector('.main')
const visit = document.querySelector('#visit')


function getData() {
    fetch(`https://api.github.com/users/${search.value}`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        img.src = data.avatar_url;
        visit.href = data.html_url;
        username.textContent = data.login;
        fullName.textContent = data.name;
        followers.textContent = data.followers;
        following.textContent = data.following;
        repos.textContent = data.public_repos;
        blog.textContent = data.blog;
        bio.textContent = data.bio;

    })
}

btn.addEventListener('click',function(){
    getData()
    main.classList.add('flex')
    main.classList.remove('hidden')
})