let display = document.getElementById("text");

let eqation = [];

let buttonsPressed = [];

function clickedButton (clicked_id) {
    buttonsPressed.push(clicked_id);
    displayPressed()
}

/*-----------------------------------------------------------------*/
function plus () {
    eqation.push(createNumber());
    calculate();
    eqation.push("+");
}

function minus () {
    eqation.push(createNumber());
    calculate();
    eqation.push("-");
}

function times () {
    eqation.push(createNumber());
    calculate();
    eqation.push("*");
}

function divide () {
    eqation.push(createNumber());
    calculate();
    eqation.push("/");
}
/*-----------------------------------------------------------------*/

function equals () {
    eqation.push(createNumber());
    calculate();
    display.innerHTML = eqation[0];
    eqation = [];
}

function displayPressed () {
    let data = "";

    if (buttonsPressed.length != 0) {
        for (let i = 0; i < buttonsPressed.length; i++) {
            data = data + buttonsPressed[i];
        }
    }
    else {
        data = "0";
    }

    display.innerHTML = data;
}

function createNumber () {
    let num = 0;

    for (let i = 0; i < buttonsPressed.length; i++) {
        num = num + (Number(buttonsPressed[i]) * Math.pow(10, (buttonsPressed.length - (i + 1))));
    }

    buttonsPressed = [];

    return num;
}

function calculate () {
    if (eqation.length > 2) {
        for (let i = 0; i < eqation.length; i++) {
            
            let num1 = eqation[0];
            let num2 = eqation[2];

            let operator = eqation[1];

            eqation = [];

            if(operator == "+") {
                eqation.push(num1 + num2);
            }

            if(operator == "-") {
                eqation.push(num1 - num2);
            }

            if(operator == "*") {
                eqation.push(num1 * num2);
            }

            if(operator == "/") {
                eqation.push(num1 / num2);
            }
        }
    }
}