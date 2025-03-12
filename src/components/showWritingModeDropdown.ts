export function showWritingModeDropdown(): void {
    const WritingModeDropdown = document.getElementById("container-writing-mode");
    if (WritingModeDropdown) {
        WritingModeDropdown.style.display = "flex";
      console.info("container-writing-mode для hide нашёлся") ;}
    else {console.info("container-writing-mode для hide not found");}
    }