const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
let checkIn = document.getElementById("check_in");
// let checkOut = document.getElementById("check_out");
const message = document.getElementById("comments");
const checkboxInput = document.getElementById("checkbox");
const err = document.querySelector(".err-hint");
const allInputs = document.querySelectorAll("input");
const checkErr = document.getElementById("checkErr");
const checkLabel = document.getElementById("checkbox-label");
// const submitted = document.querySelector(".submitted");

// //Set up check in and check out dates
//THIS BELOW IS THE DATE
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const todayDate = today.toISOString();
const tomorrowDate = tomorrow.toISOString();
const tomorrowISO = tomorrowDate.slice(0, 10);
const todayISO = todayDate.slice(0, 10);
document.getElementById("check_in").min = todayISO;

let isFormValid = false;
let isValide = false;

const resetInput = (e) => {
  e.classList.remove("invalid");
  e.nextElementSibling.classList.add("none");
};

const inputs = [nameInput, emailInput, phoneInput, checkIn];
// checkboxInput

const messages = [
  "Full name",
  "Email address",
  "Phone number",
  "Check in date",
  "Message",
];

function invalidate(e) {
  // e.classList.remove("valid");
  e.classList.add("invalid");
  e.nextElementSibling.classList.remove("none");
}
function validate(e) {
  // e.classList.remove("invalid");
  e.classList.add("valid");
  e.nextElementSibling.classList.add("none");
}

// const validateCheck = (e) => {
//   e.classList.remove("invalid");
//   e.classList.add("valid");
//   checkErr.classList.add("hidden");
// };
// const invalidateCheck = (e) => {
//   e.classList.remove("valid");
//   e.classList.add("invalid");
//   checkErr.classList.remove("hidden");
// };

const validateInputs = () => {
  if (!isValide) return;
  isFormValid = true;
  inputs.forEach((input) => {
    resetInput(input);
  });

  if (!nameInput.value.match(/[A-Z][a-z]{2,}/)) {
    isFormValid = false;
    invalidate(nameInput);
  } else {
    validate(nameInput);
  }

  // THIS IS EITHER EMAIL ADDRESS OR MOBILE NUMBER
  // REVIEW THIS WHOLE SECTION
  if (
    !emailInput.value.match(
      /^[A-Za-z0-9-_\.]{2,}[@][a-z0-9-_]{2,}\.[a-z\.]{1,}[a-z]{1,}$/
    )
  ) {
    invalidate(emailInput);
    // if (!phoneInput.value.match(/^[0-9]{10}\b/)) {
    //   isFormValid = false;
    //   // invalidate(phoneInput);
    //   // validate(phoneInput);
    // }
    // if (emailInput.value.match(/[a-z0-9][@]/)) {
    //   isFormValid = false;
    //   // Peraphs we should remove invalidate and add the innerHTML
    //   // invalidate(emailInput);
    //   // emailInput.nextElementSibling.innerHTML = "Email address not valid";
    // }
  } else {
    // validate(phoneInput);
    validate(emailInput);
  }

  if (!phoneInput.value.match(/^[0-9]{10}\b/)) {
    invalidate(phoneInput);
    // if (
    //   !emailInput.value.match(
    //     /^[A-Za-z0-9-_\.]{2,}[@][a-z0-9-_]{2,}\.[a-z\.]{1,}[a-z]{1,}$/
    //   )
    // ) {
    //   // || !emailInput.value
    //   isFormValid = false;
    //   invalidate(emailInput);
    //   // SAME AS ABOVE: DIRECTLY ADDRESS THE INNERHTML
    //   // emailInput.nextElementSibling.innerHTML = "Email address not valid";
    // }
    // if (
    //   phoneInput.value.match(/[a-zA-Z]/) ||
    //   phoneInput.value.match(/[0-9]{0,9}/)
    // ) {
    //   isFormValid = false;
    //   invalidate(phoneInput);
    // }
    // if (
    //   !phoneInput.value &&
    //   emailInput.value.match(
    //     /^[A-Za-z0-9-_\.]{2,}[@][a-z0-9-_]{2,}\.[a-z\.]{1,}[a-z]{1,}$/
    //   )
    // ) {
    //   isFormValid = true;
    //   validate(phoneInput);
    // }
  } else {
    validate(phoneInput);
    // validate(emailInput);
  }

  if (!checkIn.value) {
    isFormValid = false;
    invalidate(checkIn);
  } else {
    validate(checkIn);
  }

  if (!checkboxInput.checked) {
    isFormValid = false;
    checkLabel.classList.add("err-hint");
  } else {
    checkLabel.classList.add("not-err");
  }
  return false;
};
window.addEventListener("load", validateInputs);

function storeAccountInfo() {
  console.log("Working!");
  let saveAcctNum = checkboxInput.checked;
  if (saveAcctNum === true) {
    let full_name = nameInput.value;
    let email_address = emailInput.value;
    let phone_num = phoneInput.value;
    let check_in = checkIn.value;

    let additional_message = message.value;
    localStorage.setItem("full_name", full_name);
    localStorage.setItem("email_address", email_address);
    localStorage.setItem("phone_number", phone_num);
    localStorage.setItem("check_in", check_in);
    // localStorage.setItem("check_out", check_out);
    localStorage.setItem("additional_message", additional_message);
    // if (!email_address) {
    //   localStorage.removeItem("email_address");
    // } else if (!phone_num) {
    //   localStorage.removeItem("phone_number");
    // }
    if (!additional_message) {
      localStorage.removeItem("additional_message");
    }
  }
}

let items = [
  "full_name",
  "email_address",
  "phone_number",
  "check_in",
  //   "check_out",
  "additional_message",
];

function removeAccountInfo() {
  items.forEach((item) => {
    localStorage.removeItem(item);
  });
}

if (typeof Storage !== "undefined") {
  // verificationName();
  storeAccountInfo();
  // removeAccountInfo();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValide = true;
  validateInputs();
  storeAccountInfo();
  if (isFormValid === true) {
    // removeAccountInfo();
    storeAccountInfo();

    window.location.href = "contact.html";
    alert("Your Booking has been confirmed");
  }
});

form.addEventListener("change", (e) => {
  e.preventDefault();

  {
    nameInput.value.match(/[A-Z][a-z]{2,}/) ? validate(nameInput) : null;
  }

  {
    emailInput.value.match(
      /^[A-Za-z0-9-_\.]{2,}[@][a-z0-9-_]{2,}\.[a-z\.]{1,}[a-z]{1,}$/
    )
      ? validate(emailInput)
      : invalidate(emailInput);
  }

  {
    phoneInput.value.match(/^[0-9]{10}\b/)
      ? validate(phoneInput)
      : invalidate(phoneInput);
  }

  {
    checkIn.value ? validate(checkIn) : null;
  }
});
