document.getElementById('input').addEventListener('keyup',function(){
    const inputs = document.getElementById('input');
    const imgSec = document.querySelectorAll('.img');
    for(let img of imgSec){
        img.style.display = 'none';
        const title = img.getAttribute('data-title');
        const lowCase = inputs.value.toLowerCase();
        if(lowCase == title){
            img.style.display = 'block';
            img.classList.add('f')
        }
        if(lowCase == ''){
            img.style.display = 'block';
        }
    }
})