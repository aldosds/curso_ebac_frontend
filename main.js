document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('#avatar');
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const repos = document.querySelector('#repos');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/aldosds')
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        avatar.src = json.avatar_url;
        name.innerText = json.name;
        username.innerText = json.login;
        repos.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following
        link.href = json.html_url;
    })
})