const partnerClient = document.getElementById("partner-client");
const isMarriedRadio = document.getElementById("is-married");
const isSingleRadio = document.getElementById("is-single");
const isDivorcedRadio = document.getElementById("is-divorced");
const isPartnerMarriedRadio = document.getElementById(`is-married-partner`);
const partnerPartnerClient = document.querySelector(`#partner-client .client-marriage`);



isMarriedRadio.addEventListener("change", togglePartnerClient);
isSingleRadio.addEventListener("change", togglePartnerClient);
isDivorcedRadio.addEventListener("change", togglePartnerClient);

togglePartnerClient();

function togglePartnerClient() {
    if (isMarriedRadio.checked) {
        partnerClient.style.pointerEvents = "auto";
        partnerClient.style.opacity = '100%';
        isPartnerMarriedRadio.checked = true;
        partnerPartnerClient.style.opacity = `30%`;

    } else {
        partnerClient.style.pointerEvents = "none";
        partnerClient.style.opacity = '30%';
        isPartnerMarriedRadio.checked = false;
        partnerPartnerClient.style.opacity = `100%`;
    }
    if (isSingleRadio.checked) {
        partnerClient.style.pointerEvents = "none";
        partnerClient.style.opacity = '30%';
    }
    if (isDivorcedRadio.checked) {
        partnerClient.style.pointerEvents = "none";
        partnerClient.style.opacity = '30%';
    }

}
