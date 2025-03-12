export function hideWritingModeDropdown(): void {
    const WritingModeDropdown = document.getElementById("container-writing-mode");
    if (WritingModeDropdown) {
        WritingModeDropdown.style.display = "none";
      console.info("container-writing-mode для hide нашёлся") ;}
    else {console.info("container-writing-mode для hide not found");}
    }