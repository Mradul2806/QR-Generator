const wrapper = document.querySelector(".wrapper"),
generateBtn=wrapper.querySelector(".form button"),
qrInput=wrapper.querySelector(".form input"),
qrImg=wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return; //If Input is Empty Return
    // console.log(qrValue);
    generateBtn.innerText = "Generating QR Code..."; 
    // api entering qrValue in QR
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generating QR Code"; 
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value)
    {
        wrapper.classList.remove("active");
        preValue = "";
    }
});