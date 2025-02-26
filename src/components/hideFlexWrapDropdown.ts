export function hideFlexWrapDropdown(): void {
    const flexWrapDropdown = document.getElementById("container-flex-wrap");
    if (flexWrapDropdown) {
      flexWrapDropdown.style.display = "none";
      console.info("container-flex-wrap для hide нашёлся") ;}
    else {console.info("container-flex-wrap для hide not found");}
  }
  