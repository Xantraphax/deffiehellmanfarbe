let aliceMixedColor = {red: 0, green: 0, blue: 0}; // Stores Alice's mixed color
let bobMixedColor = {red: 0, green: 0, blue: 0};   // Stores Bob's mixed color



// Helper to set RGB color for a box
function setColorBox(elementId, red, green, blue) {
    document.getElementById(elementId).style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    const box = document.getElementById(elementId);
    box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    // Ändere die Textfarbe, wenn die Box schwarz ist
    if (red + green +  blue <= 100) {
        box.style.color = 'white';
        
    } else {
        box.style.color = 'black';
       
    }
}

// Update public color
function updatePublicColor() {
    const red = document.getElementById("publicRed").value;
    const green = document.getElementById("publicGreen").value;
    const blue = document.getElementById("publicBlue").value;

    document.getElementById("publicRedValue").textContent = red;
    document.getElementById("publicGreenValue").textContent = green;
    document.getElementById("publicBlueValue").textContent = blue;

    setColorBox("publicColorBox", red, green, blue);

    // Update mixed colors for Alice and Bob
    updateAliceMixedColor();
    updateBobMixedColor();
}

// Update Alice's secret color and mixed colors
function updateAliceColor() {
    const red = document.getElementById("aliceRed").value;
    const green = document.getElementById("aliceGreen").value;
    const blue = document.getElementById("aliceBlue").value;

    document.getElementById("aliceRedValue").textContent = red;
    document.getElementById("aliceGreenValue").textContent = green;
    document.getElementById("aliceBlueValue").textContent = blue;

    setColorBox("aliceColorBox", red, green, blue);

    updateAliceMixedColor();
}

function updateAliceMixedColor() {
    // Alice's mixed color (secret + public)
    const publicRed = parseInt(document.getElementById("publicRed").value);
    const publicGreen = parseInt(document.getElementById("publicGreen").value);
    const publicBlue = parseInt(document.getElementById("publicBlue").value);

    const aliceRed = parseInt(document.getElementById("aliceRed").value);
    const aliceGreen = parseInt(document.getElementById("aliceGreen").value);
    const aliceBlue = parseInt(document.getElementById("aliceBlue").value);

    const mixedRed = Math.min((publicRed + aliceRed), 255);
    const mixedGreen = Math.min((publicGreen + aliceGreen), 255);
    const mixedBlue = Math.min((publicBlue + aliceBlue), 255);

    // Save Alice's mixed color for later use by Bob
    aliceMixedColor = {red: mixedRed, green: mixedGreen, blue: mixedBlue};

    setColorBox("aliceMixedColorBox", mixedRed, mixedGreen, mixedBlue);

    // Update the final colors based on exchanged mixed colors
    updateFinalColors();
}

// Update Bob's secret color and mixed colors
function updateBobColor() {
    const red = document.getElementById("bobRed").value;
    const green = document.getElementById("bobGreen").value;
    const blue = document.getElementById("bobBlue").value;

    document.getElementById("bobRedValue").textContent = red;
    document.getElementById("bobGreenValue").textContent = green;
    document.getElementById("bobBlueValue").textContent = blue;

    setColorBox("bobColorBox", red, green, blue);

    updateBobMixedColor();
}

function updateBobMixedColor() {
    // Bob's mixed color (secret + public)
    const publicRed = parseInt(document.getElementById("publicRed").value);
    const publicGreen = parseInt(document.getElementById("publicGreen").value);
    const publicBlue = parseInt(document.getElementById("publicBlue").value);

    const bobRed = parseInt(document.getElementById("bobRed").value);
    const bobGreen = parseInt(document.getElementById("bobGreen").value);
    const bobBlue = parseInt(document.getElementById("bobBlue").value);

    const mixedRed = Math.min((publicRed + bobRed), 255);
    const mixedGreen = Math.min((publicGreen + bobGreen), 255);
    const mixedBlue = Math.min((publicBlue + bobBlue), 255);

    // Save Bob's mixed color for later use by Alice
    bobMixedColor = {red: mixedRed, green: mixedGreen, blue: mixedBlue};

    setColorBox("bobMixedColorBox", mixedRed, mixedGreen, mixedBlue);

    // Update the final colors based on exchanged mixed colors
    updateFinalColors();
}

// Final color calculation for Alice and Bob
function updateFinalColors() {
    // Alice's and Bob's final color 

    const publicRed = parseInt(document.getElementById("publicRed").value);
    const publicGreen = parseInt(document.getElementById("publicGreen").value);
    const publicBlue = parseInt(document.getElementById("publicBlue").value);

    const aliceRed = parseInt(document.getElementById("aliceRed").value);
    const aliceGreen = parseInt(document.getElementById("aliceGreen").value);
    const aliceBlue = parseInt(document.getElementById("aliceBlue").value);
    
    const bobRed = parseInt(document.getElementById("bobRed").value);
    const bobGreen = parseInt(document.getElementById("bobGreen").value);
    const bobBlue = parseInt(document.getElementById("bobBlue").value);

    const aliceFinalRed = Math.min((bobMixedColor.red + aliceRed), 255);
    const aliceFinalGreen = Math.min((bobMixedColor.green + aliceGreen), 255);
    const aliceFinalBlue = Math.min((bobMixedColor.blue + aliceBlue), 255);

    const bobFinalRed = Math.min((aliceMixedColor.red + bobRed), 255);
    const bobFinalGreen = Math.min((aliceMixedColor.green + bobGreen), 255);
    const bobFinalBlue = Math.min((aliceMixedColor.blue + bobBlue), 255);

    setColorBox("aliceFinalColorBox", aliceFinalRed, aliceFinalGreen, aliceFinalBlue);
    setColorBox("bobFinalColorBox", bobFinalRed, bobFinalGreen, bobFinalBlue);
}

// Initialize
window.onload = function() {
    updatePublicColor();
    updateAliceColor();
    updateBobColor();
    
};
