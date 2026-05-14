document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const DOB = document.getElementById("DOB").value.trim();
  const gender = document.querySelector(
    'input[name = "gender"]:checked',
  )?.value;

  
  // const qualification = document.getElementById("qualification").value.trim();
  // const percentage = document.getElementById("percentage").value.trim();
  // const course = document.getElementById("course").value.trim();
  // const batch = document.getElementById("batch").value.trim();
  // const address = document.getElementById("residentialAddress").value.trim();
  // const city = document.getElementById("city").value.trim();
  // const pinCode = document.getElementById("pinCode").value.trim();
  // const guardianDetails = document
  //   .getElementById("guardianDetails")
  //   .value.trim();
  // const guardianContactNumber = document
  //   .getElementById("guardianContactNumber")
  //   .value.trim();
  // const referral = document.getElementById("referral").value.trim();
  // const special = document.getElementById("special").value.trim();

  const data = {
    fullName: fullName,
    email: email,
    phone: phone,
    gender: gender,
    qualification: qualification,
    course: course,
    batch: batch,
    address: address,
    city: city,
    pinCode: pinCode,
    guardianDetails: guardianDetails,
    guardianContactNumber: guardianContactNumber,
    referral: referral,
    special: special,
  };

  validate(data)
    ? (console.log(data),
      alert("Validation Successfull All Entries are Correct !!!"),
      document.querySelectorAll(".error").forEach((element) => {
        element.innerText = "";
      }))
    : alert("Validation Unsuccessfull Check your entries !!!");

  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  //   const qualificationError =
  //     document.getElementById("qualificationError");
  //   const percentageError = document.getElementById("percentageError");
  //   const courseError = document.getElementById("courseError");
  //   const batchError = document.getElementById("batchError");
  //   const addressError = document.getElementById("residentialAddressError");
  //   const cityError = document.getElementById("cityError");
  //   const pinCodeError = document.getElementById("pinCodeError");
  //   const guardianDetailsError = document.getElementById(
  //     "guardianDetailsError",
  //   );
  //   const guardianContactNumberError = document.getElementById(
  //     "guardianContactNumberError",
  //   );
  //   const referralError = document.getElementById("referralError");

  // !/^[A-Za-z\.\_\d]+@gmail.com$/.test(email)
  //   ? (emailError.innerText = "* Please enter a valid email address")
  //   : (emailError.innerText = "");

  // !/^[6-9]\d{9}$/.test(phone)
  //   ? (phoneError.innerText = "* Enter a 10-digit Indian mobile number")
  //   : (phoneError.innerText = "");
});

function validate(data) {
  isValid = true;

  if (!data.fullName) {
    document.getElementById("fullNameError").innerText = "* Name Required";
    isValid = false;
  } else if (!/^[A-Za-z\s]+$/.test(data.fullName)) {
    document.getElementById("fullNameError").innerText =
      "* Please enter a valid name";
    isValid = false;
  }

  if (!data.email) {
    document.getElementById("emailError").innerText = "* Email Required";
    isValid = false;
  } else if (
    !/^[A-Za-z\d\.\_]+@(gmail.com|outlook.com|ricr.in)$/.test(data.email)
  ) {
    document.getElementById("emailError").innerText =
      "* Please enter a valid email address";
    isValid = false;
  }

  if (!data.phone) {
    document.getElementById("phoneError").innerText =
      "* Mobile Number Required";
    isValid = false;
  } else if (!/^[6-9]\d{9}$/.test(data.phone)) {
    document.getElementById("phoneError").innerText =
      "* Enter a 10-digit Indian mobile number";
    isValid = false;
  }

  if (!data.gender) {
    document.getElementById("genderError").innerText = "* Select any gender";
    isValid = false;
  }

  return isValid;
}
