
const firstcontain = document.querySelector('#top');
firstcontain.style.textAlign = "center";
const container = document.querySelector('#container');
container.style.display = 'grid';
container.style.margin= "25px auto";
container.style.width = "500px";
container.style.height = "500px";
const buttons = document.querySelectorAll('button');

let brushcolor = 1;
let buttonclicked = false;
let wbuttonclicked = false;

function changebg(e){
    if(brushcolor == 1){
        this.style.backgroundColor = "black";
    }else if(brushcolor == 2){
        let v = [0.3,0.4,0.5,0.6,0.7,0.8];
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        let index = Math.floor(Math.random()*v.length);
        this.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ','+ index + ')';
    }else{
        this.style.backgroundColor = "bisque";
    }
    
}
function resetgrid(e){
    brushcolor = 1;
    buttonclicked = false;
    wbuttonclicked = false;
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    let v = prompt ("Please enter Integer from 1 to 64:");
    v = parseInt(v)
    if(v >= 1 && v <= 64){
        resize(v);
    }else{
        alert("wrong input, resize to default")
        resize(16);
    }
}
function resize(n){
    let totalsize = n*n;
    for(let i = 0 ; i < totalsize; i++){
        let box = document.createElement('div');
        box.classList.add("grid-item");
        const size = container.width/(n);

        box.style.width = size;
        box.style.paddingTop = size;
        box.style.border = "1px solid"
        box.style.fontsize = "16px";
        container.appendChild(box).className = "grid-item";
        box.addEventListener("mouseover", changebg);
    }

 
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${n}, 1fr)`;
}

function config(){
    console.log(this.id);
    if(this.id == 1){
        resetgrid();
        for(let i = 1; i <= 2; i++){
            buttons[i].style.color = "#5f6368";
            buttons[i].style.backgroundColor = "transparent"
        }

    }else if(this.id == 2){
        wbuttonclicked = false;
        buttons[2].style.color =  "#5f6368";
        buttons[2].style.backgroundColor = "transparent";
        if(!buttonclicked){
            buttonclicked = true;
            brushcolor = 2;
            this.style.backgroundColor = "rgb(64, 74, 119)"
            this.style.color = "white";
        }else{
            buttonclicked = false;
            brushcolor = 1;
            this.style.color =  "#5f6368";
            this.style.backgroundColor = "transparent";
        }
    }else if(this.id == 3){
        buttonclicked = false;
        buttons[1].style.color =  "#5f6368";
        buttons[1].style.backgroundColor = "transparent";
        if(!wbuttonclicked){
            wbuttonclicked = true;
            brushcolor = 3;
            this.style.backgroundColor = "rgb(64, 74, 119)"
            this.style.color = "white";
        }else{
            wbuttonclicked = false;
            brushcolor = 1;
            this.style.color =  "#5f6368";
            this.style.backgroundColor = "transparent";
        }

    }
};





buttons.forEach((button) => {
    button.addEventListener('click', config);
    button.style.border = "1px solid black";
    button.style.fontSize = "20px"
    button.style.borderRadius = "4px";
    button.style.cursor = "pointer";
    button.style.color = "#5f6368";
    button.style.padding = "1em"
    button.style.marginRight = "25px";
    button.style.backgroundColor = "transparent";
});

    
resize(16);

