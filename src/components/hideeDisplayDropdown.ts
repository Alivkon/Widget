export function hideDisplayDropdown(): void {
    const DisplayDropdown = document.getElementById("container-display");
    if (DisplayDropdown) {
        DisplayDropdown.style.display = "none";
      console.info("container-display для hide нашёлся") ;}
    else {console.info("container-display для hide not found");}
  }