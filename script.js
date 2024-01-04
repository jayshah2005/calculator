let num1 = 0;
let num2 = 0;

// Manipulating the screen.
function writeNumber(num) {
    const screen = document.querySelector('.input')
    screen.textContent += num
}



//  Script to create the calculator

function generateZeroEqualButton(){ 
    const npad = document.querySelector('.numbers')


    // Adding the 0 button
    const div = document.createElement('div');
    div.className = 'container zero'
    const button = document.createElement('button')
    button.className = 'buttons number'
    button.id = '0';
    button.textContent = '0';

    div.appendChild(button);
    npad.appendChild(div);

    // Adding the equals button
    const div1 = document.createElement('div')
    div1.className = 'container'
    const equal = document.createElement('button')
    equal.className = 'buttons operation'
    equal.id = '=';
    equal.textContent = '=';
    div1.appendChild(equal);
    npad.appendChild(div1);
}

function generateNumericButtons(){
    const npad = document.querySelector('.numbers')
 
    for(let num = 1; num < 10; num++) {
        const div = document.createElement('div')
        div.className = 'container'

        const button = document.createElement('button')
        button.className = 'buttons number'
        button.id = num;
        button.textContent = num;
        button.addEventListener('click', (button) => {
            writeNumber(button.currentTarget.attributes.id.value)
        })

        div.appendChild(button);
        npad.appendChild(div);
    }

    generateZeroEqualButton()
}

function generateOperationButtons() {
    const opad = document.querySelector('.operations');
    const operations = ['+', '-', '*', '/']

    for(operation in operations){
        const div = document.createElement('div')
        div.className = 'container'

        const button = document.createElement('button')
        button.className = 'buttons operation'
        button.id = operations[operation];
        button.textContent = operations[operation];

        div.appendChild(button);
        opad.appendChild(div);
    }
}

function generateButtons() {
    generateOperationButtons();
    generateNumericButtons();
}

generateButtons();