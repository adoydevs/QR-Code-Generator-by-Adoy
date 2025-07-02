let textBox = document.getElementById("textBox"); 
let qrImage = document.getElementById("qrImage"); 
let errorText = document.getElementById("errorText");


function generateQRCode() {
    if (textBox.value.length > 3){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textBox.value;
    qrImage.classList.add("show-img")
    }
    else {
        textBox.classList.add("animation_error");
        setTimeout(() => {
            textBox.classList.remove("animation_error");
        }, 1000);
        errorText.innerHTML = "**Please enter at least 4 characters";
    }
}

