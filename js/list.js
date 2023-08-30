function toggleFilterSidebar() {
  const sidebar = document.getElementById("filterSidebar");

  if (sidebar.style.visibility === "hidden" || sidebar.style.width === "") {
    sidebar.style.width = "90%";
    sidebar.style.visibility = "visible";
    sidebar.style.transition = "400ms ease";
  } else {
    sidebar.style.width = "0px";
    sidebar.style.visibility = "hidden";
    sidebar.style.transition = "none";
  }
}

function updatePriceValue(val) {
  document.getElementById("priceValue").innerText = val;
}

// Get today's date in the format "YYYY-MM-DD"
const today = new Date().toISOString().split("T")[0];

// Set the minimum date for check-in to be today
document.getElementById("check-in").min = today;

// When the user selects a check-in date, update the minimum check-out date
document.getElementById("check-in").addEventListener("change", function () {
  const selectedDate = this.value;
  const nextDay = new Date(
    new Date(selectedDate).getTime() + 24 * 60 * 60 * 1000
  )
    .toISOString()
    .split("T")[0];
  document.getElementById("check-out").min = nextDay;
  document.getElementById("check-out").value = nextDay; // Optional: set the check-out date automatically
});
