// input field add event listener
document.getElementById('input').addEventListener('keyup',function(){
    const inputs = document.getElementById('input');
    const imgSec = document.querySelectorAll('.img');
    // all image div select 
    for(let img of imgSec){
        img.style.display = 'none';
        const title = img.getAttribute('data-title');
        const lowCase = inputs.value.toLowerCase();
        // input field check if they are equal then display block or not equal then display none; 
        if(lowCase == title){
            img.style.display = 'block';
            img.classList.add('f')
        }
        // input field check when we remove some letter then all image display block
        if(lowCase == ''){
            img.style.display = 'block';
        }
    }
})