function calculateArea() {
    const lengthInput = parseFloat(document.getElementById("length").value) || 0;
    const widthInput = parseFloat(document.getElementById("width").value) || 0;
    const area = lengthInput * widthInput;
    document.getElementById("area").innerText = `The area is ${area}`;
}