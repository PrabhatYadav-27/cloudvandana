function submitForm() {
    // Gather form data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const genderElements = document.getElementsByName("gender");
    const selectedGenders = Array.from(genderElements)
      .filter(element => element.checked)
      .map(element => element.value);
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mobileNumber").value;

    // Display data in the popup
    document.getElementById("popupFirstName").textContent = firstName;
    document.getElementById("popupLastName").textContent = lastName;
    document.getElementById("popupDob").textContent = dob;
    document.getElementById("popupCountry").textContent = country;
    document.getElementById("popupGender").textContent = selectedGenders.join(", ");
    document.getElementById("popupProfession").textContent = profession;
    document.getElementById("popupEmail").textContent = email;
    document.getElementById("popupMobileNumber").textContent = mobileNumber;

    // Show the popup
    document.getElementById("popup").style.display = "flex";
  }

  function resetForm() {
    document.getElementById("surveyForm").reset();
  }

  function closePopup() {
    // Close the popup and reset the form
    document.getElementById("popup").style.display = "none";
    resetForm();
  }