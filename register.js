import {participantTemplate, successTemplate} from "./Template.js";

let participantCount = 1;

document.querySelector("#add").addEventListener("click", renderParticipant);

function renderParticipant() {
    participantCount += 1
    const htmlParticipant = participantTemplate(participantCount);
    document.querySelector("#add").insertAdjacentHTML("beforebegin", htmlParticipant);
}


document.querySelector("#submitButton").addEventListener("click", submitForm);


function submitForm(event) {

    event.preventDefault();

    const info = {
        adultName: document.querySelector("#adult_name").value,
        numberOfParticipants: participantCount,
        feeTotal: totalFees()
    }

    document.querySelector("form").style.display = "none";

    renderSuccessTemplate(info)
}

function totalFees() {

    let feeElements = document.querySelectorAll("[id^=fee]");

    feeElements = [...feeElements];

    const sum = feeElements.reduce((total, item)=>total + parseFloat(item.value),0);

    return sum;
}

function renderSuccessTemplate(info) {
    const htmlTemplate = successTemplate(info);
    document.querySelector("#summary").insertAdjacentHTML("beforeend", htmlTemplate);
}