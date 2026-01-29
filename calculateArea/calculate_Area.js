let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

let area = length * width;

document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}


let grocery1_amount, grocery2_amount, grocery3_amount;

function grocery_tracker() {
    grocery1_amount = parseFloat(document.getElementById('grocery1').value);
    grocery2_amount = parseFloat(document.getElementById('grocery2').value);
    grocery3_amount = parseFloat(document.getElementById('grocery3').value);

    let total = grocery1_amount + grocery2_amount + grocery3_amount;

    document.getElementById('result2').innerText = `The total amount of the grocery items is: ${total}`;    
}