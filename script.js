const generateButton = document.querySelector("#generateButton");
const resourceSelect = document.querySelector("#resourceSelect");

generateButton.addEventListener("click", function() {
   const selectedResouce = resourceSelect.value;

    console.log("Selected resource:", selectedResouce);
});