const generateButton = document.querySelector("#generateButton");
const resourceSelect = document.querySelector("#resourceSelect");
const currentResource = document.querySelector("#resource");
const goldAmount = document.querySelector("#gold");

const woodcuttingXP = document.querySelector("#woodcuttingXP");
const miningXP = document.querySelector("#miningXP");
const fishingXP = document.querySelector("#fishingXP");

const woodcuttingLevel = document.querySelector("#woodcutting");
const miningLevel = document.querySelector("#mining");
const fishingLevel = document.querySelector("#fishing");

generateButton.addEventListener("click", function() {
   const selectedResource = resourceSelect.value;

   const resourceAmount = document.querySelector(`#${selectedResource}`);

   resourceAmount.textContent = Number(resourceAmount.textContent) + 1;

   currentResource.textContent = selectedResource;

   goldAmount.textContent = Number(goldAmount.textContent) + 1;

   if (selectedResource === "wood") {
    woodcuttingXP.textContent = Number(woodcuttingXP.textContent) + 1;

    if (Number(woodcuttingXP.textContent) % 10 === 0) {
        woodcuttingLevel.textContent = Number(woodcuttingLevel.textContent) + 1;
    }
   }

   if (selectedResource === "copper") {
    miningXP.textContent = Number(miningXP.textContent) + 1;

    if (Number(miningXP.textContent) % 10 === 0) {
        miningLevel.textContent = Number(miningLevel.textContent) + 1;
    }
   }

   if (selectedResource === "fish") {
    fishingXP.textContent = Number(fishingXP.textContent) + 1;
    
    if (Number(fishingXP.textContent) % 10 === 0) {
        fishingLevel.textContent = Number(fishingLevel.textContent) + 1;
    }
   }

    console.log("Generated:", selectedResource);
});