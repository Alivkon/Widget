export function hideJustifyVerticalDropdown(): void {
    const justifyVerticalDropdown2 = document.getElementById("container-justify-vertical");
    if (justifyVerticalDropdown2) {
      console.info("container-justify-vertical нашёлся");
      justifyVerticalDropdown2.style.display = "none";
      }
      else {console.info("container-justify-vertical not found");}
  }