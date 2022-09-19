const Splash = document.querySelector('.Splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        Splash.classList.add('none');
    }, 3000);
})