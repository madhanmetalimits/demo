// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbxPHifzkGuBSS2WpDEvOZwxGRP5zhVJZHok4Q_2aTPHPH4dQVLGWtfijOpPHWMbLWsy/exec";

// const form = document.forms["contact-form"];

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => {
//       console.log("****************", response);
//       alert("Thank you! your form is submitted successfully.");
//     })
//     .then((response) => {
//       //  console.log("****************", response)
//       alert("Thank you! your form is submitted successfully.", response);
//       //   window.location.reload();
//     })
//     .catch((error) => console.error("Error!", error.message));
// });

const form = document.forms["contact-form"];
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxPHifzkGuBSS2WpDEvOZwxGRP5zhVJZHok4Q_2aTPHPH4dQVLGWtfijOpPHWMbLWsy/exec";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  fetch(scriptURL, { method: "POST", body: formData })
    .then((response) => {
      if (response.ok) {
        form.reset(); // Clear the form
        form.querySelector(".sent-message").style.display = "block"; // Show the success message
        form.querySelector(".loading").style.display = "none"; // Hide the loading message
      } else {
        throw new Error("Form submission failed!");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      form.querySelector(".error-message").innerHTML =
        "An error occurred. Please try again later.";
      form.querySelector(".error-message").style.display = "block"; // Show the error message
      form.querySelector(".loading").style.display = "none"; // Hide the loading message
    });
});
