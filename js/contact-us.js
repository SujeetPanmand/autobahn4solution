const form = document.getElementById("contactUs");
form.target = 'contactUsIframe';

var loaderElement = document.getElementById("ajaxLoader");

// detect when the iframe reloads
var iframe = document.getElementById('contactUsIframe');
if (iframe) {
  iframe.onload = function () {
    loaderElement.style.display = "none";
    alert("Your enquiry submitted successfully");
    form.reset();
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  var formData = new FormData(form);
  // var nameRegex = new RegExp("^[a-zA-Zs]*$");
  var emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  var phoneNumberRegex = new RegExp(/^\d+$/);
  var emptyRegex = new RegExp(/^[^]+$/);

  var name = formData.get("entry.1318155791");
  var email = formData.get("entry.1905198810");
  var phoneNumber = formData.get("entry.1578023363");
  var message = formData.get("entry.1298951158");

  // if (!emptyRegex.test(name) || !nameRegex.test(name)) {
  if (!emptyRegex.test(name)) {
    alert("Please enter valid name");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter valid email");
    return false;
  }

  if (!emptyRegex.test(email)) {
    alert("Please enter valid email");
    return false;
  }

  if (!emptyRegex.test(phoneNumber)) {
    alert("Please enter valid phone number");
    return false;
  }

  if ((!phoneNumberRegex.test(phoneNumber)) || ((phoneNumber.length) < 10)) {
    alert("Please enter valid phone number minimum 10 digit number");
    return false;
  }

  if (!emptyRegex.test(message)) {
    alert("Message field should not empty");
    return false;
  }

  loaderElement.style.display = "block";

  form.submit();

});

// function submitEnquiry() {
//   const form = document.getElementById("contactUs");
//   var formData = new FormData(form);

//   // var nameRegex = new RegExp("^[a-zA-Zs]*$");
//   var emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
//   var phoneNumberRegex = new RegExp(/^\d+$/);
//   var emptyRegex = new RegExp(/^[^]+$/);

//   var name = formData.get("entry.1318155791");
//   var email = formData.get("entry.1905198810");
//   var phoneNumber = formData.get("entry.1578023363");
//   var message = formData.get("entry.1298951158");

//   // if (!emptyRegex.test(name) || !nameRegex.test(name)) {
//   if (!emptyRegex.test(name)) {
//     alert("Please enter valid name");
//     return false;
//   }

//   if (!emailRegex.test(email)) {
//     alert("Please enter valid email");
//     return false;
//   }

//   if (!emptyRegex.test(phoneNumber)) {
//     alert("Please enter valid phone number");
//     return false;
//   }

//   if (!phoneNumberRegex.test(phoneNumber)) {
//     alert("Please enter valid phone number");
//     return false;
//   }

//   if (!emptyRegex.test(message)) {
//     alert("Message field should not empty");
//     return false;
//   }

//   var loaderElement = document.getElementById("ajaxLoader");
//   loaderElement.style.display = "block";
  
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", "https://docs.google.com/forms/d/e/1FAIpQLSc79jbSfQLgfgc67ejXQpa6jXn-33zugduSHGbxvRSS6zY5mg/formResponse");
//   xhr.onload = function (event) {
//     //alert("Success, server responded with: " + event.target.response); // raw response
//     alert("Your enquiry submitted successfully");
//     form.reset();
//     loaderElement.style.display = "none";
//   };
//   // or onerror, onabort

//   xhr.send(formData);

// }
