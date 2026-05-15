document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const dob = document.getElementById("DOB").value.trim();
  const gender = document.querySelector(
    'input[name = "gender"]:checked',
  )?.value;

  const qualification = document.getElementById("qualification").value.trim();

  const percentage = document.getElementById("percentage").value.trim();
  const course = document.getElementById("course").value.trim();
  const batch = document.querySelectorAll("input[name ='batch']:checked");

  timings = [];
  batch.forEach((element) => {
    timings.push(element.value);
  });

  const address = document.getElementById("residentialAddress").value.trim();
  const city = document.getElementById("city").value.trim();
  const pinCode = document.getElementById("pinCode").value.trim();
  const guardianFullName = document
    .getElementById("guardianFullName")
    .value.trim();
  const guardianContactNumber = document
    .getElementById("guardianContactNumber")
    .value.trim();
  const referral = document.getElementById("referral").value.trim();
  // const special = document.getElementById("special").value.trim();

  const data = {
    fullName: fullName,
    email: email,
    phone: phone,
    DOB: dob,
    gender: gender,
    qualification: qualification,
    percentage: percentage,
    course: course,
    batch: timings,
    address: address,
    city: city,
    pinCode: pinCode,
    guardianFullName: guardianFullName,
    guardianContactNumber: guardianContactNumber,
    referral: referral,
    special: special,
  };

  validate(data)
    ? (console.log(data),
      alert("Validation Successfull All Entries are Correct !!!"))
    : alert("Validation Unsuccessfull Check your entries !!!");

  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
});

function validate(data) {
  isValid = true;

  document.querySelectorAll(".error").forEach((element) => {
    element.innerText = "";
  });

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

  const currentYear = new Date().getFullYear();
  const DateOfBirth = data.DOB.split("-")[0];
  
  if (currentYear-DateOfBirth <= 15) {
    document.getElementById("DOBError").innerText = "* You must be at least 15 years old"

  }


  if (!data.gender) {
    document.getElementById("genderError").innerText = "* Select any gender";
    isValid = false;
  }

  if (!data.qualification) {
    document.getElementById("qualificationError").innerText =
      "* Please select a qualification";
    isValid = false;
  }

  if (!data.percentage) {
    document.getElementById("percentageError").innerText =
      "* Please enter percentage";
    isValid = false;
  } else if (
    !/^(100(\.0+)?|[0-9]{1,2}(\.\d+)?|[A-Fa-f])$/.test(data.percentage)
  ) {
    document.getElementById("percentageError").innerText =
      "* Enter a valid percentage or grade";
    isValid = false;
  }

  if (!data.course) {
    document.getElementById("courseError").innerText =
      "* Please select any course";
    isValid = false;
  }

  if (data.batch.length == 0) {
    document.getElementById("batchError").innerText =
      "* Please select a batch timings";
    isValid = false;
  }

  if (!data.address) {
    document.getElementById("addressError").innerText =
      "* Please enter address";
    isValid = false;
  }

  if (!data.city) {
    document.getElementById("cityError").innerText = "* Please enter city";
    isValid = false;
  } else if (!/^[A-Za-z\s]+$/) {
    document.getElementById("cityError").innerText =
      "* Please enter a valid city name";
    isValid = false;
  }

  if (!data.pinCode) {
    document.getElementById("pinCodeError").innerText =
      "* Please enter pinCode";
    isValid = false;
  } else if (!/^[1-9][0-9]{5}$/.test(data.pinCode)) {
    document.getElementById("pinCodeError").innerText =
      "* Please enter a valid pinCode";
    isValid = false;
  }

  console.log(data.guardianFullName);

  if (!data.guardianFullName) {
    document.getElementById("guardianFullNameError").innerText =
      "* Name Required";
    isValid = false;
  } else if (!/^[A-Za-z\s]+$/.test(data.guardianFullName)) {
    document.getElementById("guardianFullNameError").innerText =
      "* Please enter a valid Full Name";
    isValid = false;
  }

  if (!data.guardianContactNumber) {
    document.getElementById("guardianContactNumberError").innerText =
      "* Please enter Mobile Number";
  } else if (!/^[6-9]\d{9}$/.test(data.guardianContactNumber)) {
    document.getElementById("guardianContactNumberError").innerText =
      "* Enter a valid 10-digit contact number";
  }

  if (!data.referral) {
    document.getElementById("referralError").innerText = "* Select an option";
  }

  return isValid;
}
