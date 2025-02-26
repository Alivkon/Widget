export function hideFlexDirectionDropdown(): void {
    const flexDirectionDropdown3 = document.getElementById("container-flex-direction");
    if (flexDirectionDropdown3) {
      flexDirectionDropdown3.style.display = "none";
      console.info("container-flex-direction for hide нашёлся") ;}
    else {console.info("container-flex-direction not found");}
  }