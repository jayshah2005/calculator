let num1 = null;
let num2 = null;
let calculations = document.querySelector('.calculations');

// Manipulating the screen.
function writeNumber(num) {
    const screen = document.querySelector('.result')
    screen.textContent += num
}

function operate(operation) {

    const input = document.querySelector('.result');

    if(input.textContent == '' && calculations.textContent == ''){
        return
    } else if(input.textContent != '' && calculations.textContent == ''){
        num1 = input.textContent
        input.textContent = '';
        calculations.textContent = num1 + ' ' + operation;
    } else if(input.textContent == '' && calculations.textContent != '' && num1 != null){
        calculations.textContent = num1 + ' ' + operation;
    } else if(input.textContent != '' && calculations.textContent != '' && num1 != null && num2 == null){
        calculations.textContent = num1 + ' ' + operation;
    } else if(input.textContent != '' && calculations.textContent != '' && num1 != null && num2 != null){
        num1 = input.textContent;
        input.textContent = '';
        calculations.textContent = num1 + ' ' + operation;
    }

    if(num2 != null) num2 = null;
}

function equals() {

    const input = document.querySelector('.result');

    if(num1 == null){
        return
    } else if(input.textContent != '' && calculations.textContent != '' && num1 != null && num2 != null){
        return
    }

    const arr = calculations.textContent.split(' ');
    num2 = input.textContent;
    let result;

    num1 = +num1;
    num2 = +num2;

    switch(arr[1]) {
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1/num2;
            break;
        case '*':
            result = num1 * num2
            break;
    }

    input.textContent = round(result);
    calculations.textContent = calculations.textContent + ' ' + num2
}

function round(num) {
    return Math.round(num * 10)/10
}

function reset() {
    num1 = null;
    num2 = null;
    document.querySelector('.calculations').textContent = '';
    document.querySelector('.result').textContent = '';
}

//  Script to create the calculator

function genreateClearDeleteButtons(){
    const head = document.querySelector('.head') 

    const reset = document.createElement('div');
    reset.className = 'container reset'
    const button1 = document.createElement('button')
    button1.className = 'buttons operation'
    button1.id = 'reset';
    button1.textContent = 'Reset';
    button1.addEventListener('click', reset)

    reset.appendChild(button1);
    head.appendChild(reset);

    const deleteButton = document.createElement('div');
    deleteButton.className = 'container reset'
    const button2 = document.createElement('button')
    button2.className = 'buttons operation'
    button2.id = 'delete';
    button2.textContent = 'Delete';
    button2.addEventListener('click', () => {
    document.querySelector('.result').textContent = ''
    })

    deleteButton.appendChild(button2);
    head.appendChild(deleteButton);
}

function generateZeroEqualButton(){ 
    const npad = document.querySelector('.numbers')


    // Adding the 0 button
    const div = document.createElement('div');
    div.className = 'container zero'
    const button = document.createElement('button')
    button.className = 'buttons number'
    button.id = '0';
    button.textContent = '0';
    button.addEventListener('click', (button) => {
        writeNumber(button.currentTarget.attributes.id.value)
    })

    div.appendChild(button);
    npad.appendChild(div);

    // Adding the equals button
    const div1 = document.createElement('div')
    div1.className = 'container'
    const equal = document.createElement('button')
    equal.className = 'buttons operation'
    equal.id = '=';
    equal.textContent = '=';
    equal.addEventListener('click', equals)

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
        button.addEventListener('click', (event) => {
            writeNumber(event.currentTarget.attributes.id.value)
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
        button.addEventListener('click', (event) => {
            operate(event.currentTarget.attributes.id.value);
        })

        div.appendChild(button);
        opad.appendChild(div);
    }
}

function generateButtons() {
    genreateClearDeleteButtons();
    generateOperationButtons();
    generateNumericButtons();
}

generateButtons();