var percentEl = document.querySelector('.percent')
var progressEl = document.querySelector('.progress')
var count = 4;
var per = 16;
var loading = setInterval(animate, 100);
function animate(){
    if(count == 100 && per == 400){
        clearInterval(loading)
    }
    else{
        per = per + 4;
        count = count + 1;
        progressEl.style.width = per + 'px';
        percentEl.textContent = count + '%';
    }
}