import { showFlexDirectionDropdown} from "./showFlexDirectionDropdown";
import { hideFlexDirectionDropdown} from "./hideFlexDirectionDropdown";
import { showFlexWrapDropdown} from "./showFlexWrapDropdown";
import {  hideFlexWrapDropdown } from "./hideFlexWrapDropdown";
import { showJustifyVerticalDropdown} from "./showJustifyVerticalDropdown";
import { hideJustifyVerticalDropdown } from "./hideJustifyVerticalDropdown";
import { showJustifyContentDropdown } from "./showJustifyContentDropdown";
import { showWritingModeDropdown } from "./showWritingModeDropdown";
import { hideJustifyContentDropdown } from "./hideJustifyContentDropdown";
export function chooseDisplayDropdown(): void {
    console.log("Choose Display Dropdown done");
    const displayDropdown = document.getElementById("display-dropdown") as HTMLSelectElement;
    if (displayDropdown.value === "flex") {
      // Показываем настройки для Flexbox
      showFlexDirectionDropdown();
      showFlexWrapDropdown();
      showJustifyVerticalDropdown();
      showJustifyContentDropdown();
  } 
//   else if (displayDropdown.value === "grid") {
//       // Показываем настройки для Grid
//       hideJustifyVerticalDropdown();
//       hideFlexDirectionDropdown();
//       hideFlexWrapDropdown();
//       showJustifyContentDropdown();    
//  } 
  else if (displayDropdown.value === "block" )//|| displayDropdown.value === "inline-block") 
    {
      hideFlexWrapDropdown();
      hideFlexDirectionDropdown();
      hideJustifyVerticalDropdown();
      hideJustifyContentDropdown();     
      showWritingModeDropdown 
  }}