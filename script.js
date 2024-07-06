const rateBtns = document.querySelectorAll(".rate-btn");
const subBtn = document.querySelector(".submit-btn");
const result = document.querySelector(".result");
const container = document.querySelector(".container");
const thanksContainer = document.querySelector(".thanks-container");
const alert = document.querySelector(".alert");
let activeValue = '';

selectActive();
submitRate();


// function to remove the active class from all buttons
function removeActive(){
    rateBtns.forEach(function(btn){
        btn.classList.remove("active");
    })

}

// function to select the choosen button as active
function selectActive() {
    rateBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            removeActive();
            btn.classList.add("active");
            alert.style.display = 'none';
        });
    });
}

// function to return the choosen value
function getActiveValue() {
    const activeElement = document.querySelector(".active");
    return activeElement ? activeElement.value : null;
}

// function to toggle the containers
function toggleContainers() {
    container.style.display = 'none';
    thanksContainer.style.display = 'flex';
}

// function to submit the user rate
function submitRate() {
    subBtn.addEventListener("click", () => {
        activeValue = getActiveValue();
        if (activeValue) {
            result.textContent = `${activeValue}`;
            toggleContainers();
        } else {
            appearAlert();
        }
    })
}

function appearAlert() {
    alert.style.display = "block";
}
