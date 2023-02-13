const COLOR_BTNS = document.querySelectorAll('.color');
COLOR_BTNS.forEach(color => {
    color.addEventListener('click', () => {
        let colorNameClass = color.className;
        if(!color.classList.contains('active-color')){
            console.log(colorNameClass);
            let colorName = colorNameClass.slice(colorNameClass.indexOf('-') + 1, colorNameClass.length);
            console.log(colorName);
            resetActiveBtns();
            color.classList.add('active-color');
            setNewColor(colorName)
        }
    });
})

// resetting all color btns
function resetActiveBtns(){
    COLOR_BTNS.forEach(color => {
        color.classList.remove('active-color');
    });
}

// set new color on the banner right 
function setNewColor(color){
    document.querySelector('.gallery img').src = `../images/dior/dior_${color}.jpg`;
}