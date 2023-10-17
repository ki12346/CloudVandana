document.addEventListener("DOMContentLoaded", function () {
    const surveyForm = document.getElementById("surveyForm");
    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const popupData = document.getElementById("popupData");

    submitBtn.addEventListener("click", function () {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const genderElements = document.getElementsByName("gender");
        const gender = Array.from(genderElements)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value)
            .join(", ");
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        popupData.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;

        popup.style.display = "block";
    });

    resetBtn.addEventListener("click", function () {
        surveyForm.reset();
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
