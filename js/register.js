document
  .getElementById("termsCheckbox")
  .addEventListener("change", function () {
    const div = document.querySelector(".checkbox__container");
    const label = document.querySelector(".checkbox__label");
    const warning = document.querySelector(".warning");
    if (this.checked) {
      div.style.backgroundColor = "#d0f9fe"; // Color when checked
      div.style.border = "1px solid #4489d3";
      label.style.color = "#183e66";
      warning.style.backgroundColor = "#4489d3";
      warning.textContent = "info";
    } else {
      div.style.backgroundColor = "#fe5764"; // Original color
      div.style.border = "1px solid #be3945";
      label.style.color = "white";
      warning.style.backgroundColor = "#be3945";
      warning.textContent = "warning";
    }
  });
