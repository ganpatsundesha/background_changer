const color_box = document.querySelectorAll(".color_box");
const body = document.querySelector("body");

color_box.forEach(function(box){
    box.addEventListener("click", function(e){

        color_box.forEach(function(box) {
            box.style.border = '1px solid #000';
        });

        if (e.target.id === 'gray'){
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === 'black'){
            body.style.backgroundColor = e.target.id
            body.style.color = "#fff"
            e.target.style.border = '1px solid white';
        }
        else if (e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
            body.style.color = "#000"
        }
        else if (e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
            body.style.color = "#fff"
        }
        else if (e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
            body.style.color = "#000"
        }
        else if (e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id
        }
        else {
            body.style.backgroundColor = 'rgba(0,0,0,0.4)'
        }
    })
})