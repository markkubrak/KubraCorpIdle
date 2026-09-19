const generateButton = document.querySelector("#generateButton");
const resourceSelect = document.querySelector("#resourceSelect");
const currentResource = document.querySelector("#resource");
const goldAmount = document.querySelector("#gold");

generateButton.addEventListener("click", function() {
   const selectedResouce = resourceSelect.value;

   const resourceAmount = document.querySelector(`#${selectedResouce}`);

   resourceAmount.textContent = Number(resourceAmount.textContent) + 1;

   currentResource.textContent = selectedResouce;

   goldAmount.textContent = Number(goldAmount.textContent) + 1;

    console.log("Generated:", selectedResouce);
});