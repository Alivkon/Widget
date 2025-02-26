export function hideJustifyContentDropdown(): void {
    const JustifyContentDropdown = document.getElementById("container-justify-content");
    if (JustifyContentDropdown) {
      JustifyContentDropdown.style.display = "none";
      console.info("container-justify-content для hide нашёлся") ;}
    else {console.info("container-justify-content для hide not found");}
  }