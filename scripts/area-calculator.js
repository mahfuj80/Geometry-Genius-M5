function calculateTriangleArea() {
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    // console.log(base);

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    // console.log(height);

    // validate input: 
    if (isNaN(base) || isNaN(height)) {
        alert('Please insert a number');
        return;
    }
    const area = 0.5 * base * height;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

    addToCalculationEntry('Triangle', area);
}


function calculateRectangleArea() {
    // get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    // console.log(width);

    // get rectangle length
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    // console.log(length);

    // validate input: 
    if (isNaN(width) || isNaN(length)) {
        alert('Please insert a number');
        return;
    }

    // calculate Area 
    const area = width * length;

    // show rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

    addToCalculationEntry('Rectangle', area);
}
// Ellipse Area
function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-Major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');

    // validate input: 
    if (isNaN(majorRadius) || isNaN(minorRadius)) {
        alert('Please insert a number');
        return;
    }
    const area = (Math.PI * majorRadius * minorRadius).toFixed(2);
    setElementInnerText('ellipse-area', area);

    addToCalculationEntry('Ellipse', area);
}

// reusable function --> reduce duplicate code
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    // validate input: 
    if (isNaN(base) || isNaN(height)) {
        alert('Please insert a number');
        return;
    }
    const area = base * height;
    setElementInnerText('parallelogram-area', area);

    // add to calculation entry
    addToCalculationEntry('Parallelogram', area);
}

function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reuseable set span, p, div etc text
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}


// add to calculation entry
/**
 * 1. get the element where you want to add the dynamic html
 * 2. create an element you want to add
 * 3. if needed add some class
 * 4. set inner HTML. it could be dynamic Template string
 * 5. append the the created element as a child of the parent
 */
function addToCalculationEntry(areaType, area) {
    console.log(areaType + " " + area);
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;
    calculationEntry.appendChild(p);
}

// Data validation
/**
 * 1. set the type of the input field. (number, data, email);
 * 2. check the type using typeof
 * 3. isNaN NaN means : Not a Number. is NaN is checking whether  the input is nota a number or not
 */