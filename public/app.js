

let row = 5;
let column = 6;

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
            // button.tagName = `button${i}${j}`;
            buttoncontainer.appendChild(button);
            console.log('button created');
        }
    }
}

function createLabels(){
//labels for buttons to be created
}

function initializeClickFunction(x,y) {
    for(let i = 0; i < x; i ++ ) {
        for(let j = 0; j < y; j ++){
            document.getElementById(`button${i}${j}`).addEventListener('click', event => {
                alert(`Button: ${i}${j} clicked`);
            })
        }
    }
}








function indexOnload() {
    createContainer();
    createButtons();


    initializeClickFunction(row,column);
}





