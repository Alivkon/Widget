export function showFlexWrapDropdown(): void {
    const flexWrapDropdown = document.getElementById("container-flex-wrap");
    if (flexWrapDropdown) {
      flexWrapDropdown.style.display = "flex";
      console.info("container-flex-wrap для show нашёлся") ;}
    else {console.info("container-flex-wrap для show not found");}
  }
