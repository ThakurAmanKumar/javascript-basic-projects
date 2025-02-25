document.addEventListener("DOMContentLoaded", function () {
    const bgButton = document.createElement("button");
    bgButton.id = "bgChanger";
    bgButton.textContent = "Change Background";
    document.body.appendChild(bgButton);

    bgButton.style.position = "fixed";
    bgButton.style.bottom = "20px";
    bgButton.style.right = "20px";
    bgButton.style.padding = "10px 15px";
    bgButton.style.fontSize = "16px";
    bgButton.style.backgroundColor = "#4CAF50";
    bgButton.style.color = "white";
    bgButton.style.border = "none";
    bgButton.style.borderRadius = "5px";
    bgButton.style.cursor = "pointer";
    bgButton.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.2)";

    bgButton.addEventListener("mouseover", function () {
        bgButton.style.backgroundColor = "#45a049";
    });

    bgButton.addEventListener("mouseout", function () {
        bgButton.style.backgroundColor = "#4CAF50";
    });

    bgButton.addEventListener("click", function () {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        document.body.style.backgroundColor = color;
    });
});
