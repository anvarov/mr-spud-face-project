window.addEventListener("DOMContentLoaded", (event) => {
  // ** Phase 1A: Get form values and display on driver license **
  const title = document.getElementById("title");
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const eyeColor = document.getElementById("eye-color");
  const height = document.getElementById("height");
  const licenseNumber = document.getElementById("license-num");
  const licenseConfirmed = document.getElementById("license-num-confirm");
  const donorStatus = document.getElementById("donor-status");
  const form = document.getElementById("drivers-license-form");
  const button = document.getElementsByClassName("form__submit")[0];
  let count = 0;

  const changeDonorStatus = (e) => {
    const donorStatus = document.getElementById("card-donor-status");
    if (e.target.checked) {
      donorStatus.innerHTML = "Yes";
    } else {
      donorStatus.innerHTML = "No";
    }
  };

  const isNumberMatch = (el1, el2) => {
    return el1.value === el2.value
  }

  const updateDriversLicense = (e, idName) => {
    const element = document.getElementById(idName);
    element.innerHTML = e.target.value;
  };

  button.addEventListener("click", (e) => {
    button.innerHTML = count;
    count++;
    e.preventDefault();
  })
  form.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "title":
        updateDriversLicense(e, "card-title");
        break;
      case "first-name":
        updateDriversLicense(e, "card-first-name");
        break;
      case "last-name":
        updateDriversLicense(e, "card-last-name");
        break;
      case "eye-color":
        updateDriversLicense(e, "card-eye-color");
        break;
      case "height":
        updateDriversLicense(e, "card-height");
        break;
      case "license-num":
        updateDriversLicense(e, "card-license-num");
        setTimeout(() => {
          
          if (!isNumberMatch(licenseNumber, licenseConfirmed)) {
            licenseConfirmed.classList.add("no-match");
            licenseNumber.classList.add("no-match");
            button.setAttribute("disabled", true)
          } else {
            licenseNumber.classList.remove("no-match");
            licenseConfirmed.classList.remove("no-match");
            button.removeAttribute("disabled");
          }
        }, 8000);
        break;
      case "donor-status":
        changeDonorStatus(e);
        break;
    }
  });

  let inputs = document.querySelectorAll("input");
  inputs.forEach((element) => {
    element.onfocus = inputFocus;
    element.onblur = inputBlur;
  });

  function inputFocus(e) {
    e.target.classList.add("focused");
  }

  function inputBlur(e) {
    e.target.classList.remove("focused");
  }
  // title.addEventListener("input", (e) => {
  //   updateDriversLicense(e, "card-title");
  // })
  // firstName.addEventListener("input", (e)=> {
  //   updateDriversLicense(e, "card-first-name");
  // });

  // lastName.addEventListener("input", (e)=> {
  //   updateDriversLicense(e, "card-last-name");

  // });

  // eyeColor.addEventListener("input", (e)=> {
  //   updateDriversLicense(e, "card-eye-color");

  // });

  // height.addEventListener("input", (e)=> {
  //   updateDriversLicense(e, "card-height");

  // });

  // licenseNumber.addEventListener("input", (e)=> {
  //   updateDriversLicense(e, "card-license-num");

  // });

  // licenseConfirmed.addEventListener("input", (e)=> {
  //   console.log(e)

  // });

  // donorStatus.addEventListener("input", changeDonorStatus);

  // ** Phase 1B: Update license with event delegation and event.target **

  // ** Phase 2: Add focus and blur events to form inputs **

  // ** Phase 3: Check that license numbers match **

  // ** Phase 4: Update submit button click count **
});
