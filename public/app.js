
let row = 6;
let column = 5;

function createContainer() {
    let buttoncontainer = document.createElement('div');
    buttoncontainer.className = 'buttoncontainer'
    buttoncontainer.id = 'buttoncontainer'
    document.body.appendChild(buttoncontainer);
    console.log('buttoncontainer created');

}

function createButtons() {
    
    for (let i = 0; i < row; i++) {
        console.log("\n")
        for (let j = 0; j < column; j++) {
            let button = document.createElement('div')
            button.className = 'button';

            button.id = `button${i}${j}`;
            buttoncontainer.appendChild(button);
            console.log('button created');
        }
    }
}

function initializeClickFunction(x,y) {
    for(let i = 0; i < x; i ++ ) {
        for(let j = 0; j < y; j ++){
            if(i!= 0){
                document.getElementById(`button${i}${j}`).addEventListener('click', event => {
                
                    buttonFunctions(i , j);
                })
            }  
        }
    }
}


function buttonFunctions(i, j){
    alert(`Button: ${i}${j} clicked`); 
    document.getElementById(`button${i}${j}`).style.pointerEvents = 'none';   
    document.getElementById(`button${i}${j}`).style.background = '#555555'; 
}



fetch('./categories.json').then(response => response.json()).then(data => collectJSON(data));
function placeCategories(category){
    for(let i = 0; i < category.length; i ++){
        let topiccontainer = document.createElement('div');
        topiccontainer.className = 'topiccontainer';
        topiccontainer.appendChild(document.createElement("p").appendChild(document.createTextNode(`${category[i].name}`)));
        document.getElementById(`button0${i}`).appendChild(topiccontainer);
        
        // document.getElementById(`button0${i}`).appendChild(document.createElement("div").appendChild(document.createElement("p").appendChild(document.createTextNode(`${category[i].name}`))))   
    }
}
function placeQuestions(category){
    for(let j = 0; j < column; j++){
        for(let i = 1; i < row; i ++){
            console.log(`button${i}0`);


            let textcontainer = document.createElement('div');
            textcontainer.className = 'textcontainer';
            textcontainer.appendChild(document.createElement("div").appendChild(document.createElement("p").appendChild(document.createTextNode(`${category[j].amount[i-1]}`))));
            document.getElementById(`button${i}${j}`).appendChild(textcontainer);   
        }
    }

}


function collectJSON(category){
    placeCategories(category);
    placeQuestions(category);
}


function indexOnload() {
    createContainer();
    createButtons();
    initializeClickFunction(row,column);
   }





