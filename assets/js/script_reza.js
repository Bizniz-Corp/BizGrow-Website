const nav = document.querySelector('.component-sidebar');
fetch('../components/sidebar.html')
    .then(res => res.text())
    .then(data => {
        nav.innerHTML = data;

        const hamBurger = document.querySelector('.toggle-btn');
        hamBurger.addEventListener('click', function () {
            document.querySelector('#sidebar').classList.toggle('expand');
        });
    });