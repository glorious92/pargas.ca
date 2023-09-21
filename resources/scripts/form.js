const partnerClient = document.getElementById("partner-client");
const isMarriedRadio = document.getElementById("is-married");
const isSingleRadio = document.getElementById("is-single");
const isDivorcedRadio = document.getElementById("is-divorced");
const isPartnerMarriedRadio = document.getElementById(`is-married-partner`);
const partnerPartnerClient = document.querySelector(`#partner-client .client-marriage`);

isMarriedRadio.addEventListener("change", togglePartnerClient);
isSingleRadio.addEventListener("change", togglePartnerClient);
isDivorcedRadio.addEventListener("change", togglePartnerClient);

const formWrapper = document.getElementById('contact-form');

const buttonSend = document.getElementById('button-send');
// const contactForm = document.getElementById('contact-form');
const notification = document.getElementById('notification');




//  checking marriage ////////////////////////////////////////////////////////////////////////

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
togglePartnerClient();





// submit form //////////////////////////////////////////////////////////////////////////////

// notification
function showNotification(message, duration) {


    notification.textContent = message;
    notification.style.display = 'block';

    setTimeout(function () {
        notification.style.display = 'none';
    }, duration);
}



formWrapper.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // let assistant;
    // assistant = buttonSend.innerText;
    // buttonSend.innerText = "در حال ارسال اطلاعات...";
    // buttonSend.style.visibility = 'none';
    // Example using the fetch API:
    fetch(this.action, {
        method: this.method,
        body: new FormData(this)

    })
        .then(response => {
            if (response.ok) {
                formWrapper.reset();
                notification.style.backgroundColor = 'green';
                showNotification('اطلاعات شما با موفقیت ارسال شد', 2000);

            } else {
                notification.style.backgroundColor = 'green';
                showNotification('ارسال اطلاعات ناموفق بود', 2000);
                console.error(error);

            }
        })
        .catch(error => {
            console.error(error);
            notification.style.backgroundColor = 'red';
            showNotification('ارسال اطلاعات ناموفق بود', 2000);
        });
    // buttonSend.innerText = assistant;
    // buttonSend.style.visibility = 'unset';

});






// form submission

// formWrapper.addEventListener('submit', function (e) {
//     e.preventDefault(); // Prevent the default form submission

//     // You can perform any additional actions here before submitting to Google Forms

//     // Submit the form to Google Forms programmatically using JavaScript
//     const form = e.target;
//     const formData = new FormData(form);
//     const xhr = new XMLHttpRequest();

//     xhr.open('POST', form.action, true);
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     showNotification('اطلاعات شما با موفقیت ارسال شد . . .', 2000);

//     form.reset();


//     // xhr.onreadystatechange = function () {
//     //     if (xhr.readyState === XMLHttpRequest.DONE) {
//     //         if (xhr.status === 200) {
//     //             showNotification('اطلاعات شما با موفقیت ارسال شد . . .', 2000);

//     //             form.reset();
//     //         } else {
//     //            
//     //             console.error('Form submission failed');
//     //         }
//     //     }
//     // };

//     const encodedData = new URLSearchParams(formData).toString();
//     xhr.send(encodedData);
// });










// form submission
// form.addEventListener('submit', function (e) {
//     e.preventDefault(); // Prevent the default form submission

//     // You can perform any additional actions here before submitting to Google Forms

//     // Submit the form to Google Forms programmatically using JavaScript
//     const form = e.target;
//     const formData = new FormData(form);
//     const xhr = new XMLHttpRequest();

//     xhr.open('POST', form.action, true);
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

//     // // Display the success message
//     // const successMessage = document.getElementById('success-message');
//     // successMessage.style.display = 'block';
//     showNotification('اطلاعات شما با موفقیت ارسال شد . . .', 2000);

//     // // Clear the form fields
//     form.reset();

//     // // Hide the success message after 2 seconds
//     // setTimeout(function () {
//     //     successMessage.style.display = 'none';
//     // }, 5000);



//     // alert(`message sent!`);

//     // xhr.onreadystatechange = function () {
//     //     if (xhr.readyState === XMLHttpRequest.DONE) {
//     //         if (xhr.status === 200) {
//     //             // Form submission was successful

//     //         } else {
//     //             // Form submission failed
//     //             // You can add your own error handling code here
//     //             console.error('Form submission failed');
//     //         }
//     //     }
//     // };

//     // Convert the form data to URL-encoded format
//     const encodedData = new URLSearchParams(formData).toString();

//     // Send the POST request
//     xhr.send(encodedData);
// });




