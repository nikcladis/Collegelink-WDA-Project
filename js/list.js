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
