function calculateTriangleArea() {
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}


function calculateRectangleArea() {
    // get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    // get rectangle length
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    // validate input: width and length
    if (isNaN(width) || isNaN(length)) {
        alert('Please insert a number');
        return;
    }

    // calculate Area 
    const area = width * length;

    // show rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}
// Ellipse Area
function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-Major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = (Math.PI * majorRadius * minorRadius).toFixed(2);
    setElementInnerText('ellipse-area', area);
}

// reusable function --> reduce duplicate code
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    // validate input: width and length
    if (isNaN(base) || isNaN(height)) {
        alert('Please insert a number');
        return;
    }
    const area = base * height;
    setElementInnerText('parallelogram-area', area);
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

// Data validation
/**
 * 1. set the type of the input field. (number, data, email);
 * 2. check the type using typeof
 * 3. isNaN NaN means : Not a Number. is NaN is checking whether  the input is nota a number or not
 */