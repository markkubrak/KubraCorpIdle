const generateButton = document.querySelector("#generateButton");
const resourceSelect = document.querySelector("#resourceSelect");

generateButton.addEventListener("click", function() {
   const selectedResouce = resourceSelect.value;

   const resourceAmount = document.querySelector(`#${selectedResouce}`);

   resourceAmount.textContent = Number(resourceAmount.textContent) + 1;

    console.log("Generated:", selectedResouce);
});