const generateButton = document.querySelector("#generateButton");
const resourceSelect = document.querySelector("#resourceSelect");
const currentResource = document.querySelector("#resource");
const goldAmount = document.querySelector("#gold");

const woodcuttingXP = document.querySelector("#woodcuttingXP");
const miningXP = document.querySelector("#miningXP");
const fishingXP = document.querySelector("#fishingXP");

generateButton.addEventListener("click", function() {
   const selectedResource = resourceSelect.value;

   const resourceAmount = document.querySelector(`#${selectedResource}`);

   resourceAmount.textContent = Number(resourceAmount.textContent) + 1;

   currentResource.textContent = selectedResource;

   goldAmount.textContent = Number(goldAmount.textContent) + 1;

   if (selectedResource === "wood") {
    woodcuttingXP.textContent = Number(woodcuttingXP.textContent) + 1;
   }

   if (selectedResource === "copper") {
    miningXP.textContent = Number(miningXP.textContent) + 1;
   }

   if (selectedResource === "fish") {
    fishingXP.textContent = Number(fishingXP.textContent) + 1;
   }

    console.log("Generated:", selectedResource);
});