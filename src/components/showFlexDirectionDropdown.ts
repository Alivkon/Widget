export function showFlexDirectionDropdown(): void {
    const flexDirectionDropdown3 = document.getElementById("container-flex-direction");
    if (flexDirectionDropdown3) {
      flexDirectionDropdown3.style.display = "flex";
      console.info("container-flex-direction нашёлся") ;}
    else {console.info("container-flex-direction not found");}
  }