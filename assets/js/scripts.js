const buttons = document.querySelectorAll(".button");
let activeButton = document.querySelector(".button.active")


function showImages(event){
    
    activeButton.classList.remove("active");
    activeButton.setAttribute("aria-selected", "false");
    activeButton.setAttribute("tabindex", "-1");        

    let ariaControlsValue = activeButton.getAttribute("aria-controls");
    let activeContent = document.getElementById(ariaControlsValue);
    activeContent.classList.remove("active");
    activeContent.setAttribute("aria-hidden", "true");

    activeButton = event.target;
    activeButton.classList.add("active");
    activeButton.setAttribute("aria-selected", "true");
    activeButton.setAttribute("tabindex", "0");

    ariaControlsValue = activeButton.getAttribute("aria-controls");
    activeContent = document.getElementById(ariaControlsValue);
    
    
    if (activeContent){
        activeContent.classList.add("active");
        activeContent.setAttribute("aria-hidden", "false");
    }

}


buttons.forEach((button) => {
    button.addEventListener("click", showImages);
});

