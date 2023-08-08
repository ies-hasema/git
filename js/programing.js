const pathogen = document.querySelector('#normal_box');
const infection = document.querySelector('body')
pathogen.addEventListener('mouseover',()=>{
    console.log('乗ったよ！');
    infection.classList.add("gaming_hazard");
});

pathogen.addEventListener('mouseout',()=>{
    console.log('降りたよ！');
    infection.classList.remove("gaming_hazard");
});