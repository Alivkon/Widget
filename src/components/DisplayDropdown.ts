//display ["flex","grid", "block", "none", "inline-block"]
export function addDisplayDropdown(leftPaneId: string): void {
    const leftPane = document.getElementById("left-pane");
    if (!leftPane) {
        console.error(`Element with ID '${leftPaneId}' not found.`);
        return;
    }
      // Создаём контейнер для выпадающего списка и текстового поля
    const containerDisplay = document.createElement("div");
    containerDisplay.style.marginBottom = "20px";  
    containerDisplay.style.display = "flex";
    containerDisplay.style.flexDirection = "row";
    containerDisplay.id = "container-display";
    // Создаём выпадающий список
    
    const displayDropdown = document.createElement("select");
    displayDropdown.id = "display-dropdown"; // Ensure the ID is set
    displayDropdown.style.width = "200px";  
    displayDropdown.style.padding = "5px";
    displayDropdown.style.marginBottom = "10px";
    displayDropdown.value = "flex";
  
    const options = ["flex", "grid", "block", "none", "inline-block"];
    options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        displayDropdown.appendChild(opt);
    });
  
    const textField = document.createElement("p");
    textField.id = "text-display-output";
    textField.textContent = options[0]; // Инициализируем первым значением
  
    displayDropdown.addEventListener("change", () => {
    textField.textContent = displayDropdown.value;
  //  chooseDisplayDropdown(); // Call the function here
    const buttonsContainer = document.getElementById("buttons-container");
        if (buttonsContainer) {
            buttonsContainer.style.display = displayDropdown.value;
        } else {
            console.error("Buttons container not found");
        }
    });
    // Создаём заголовок
    const textHeadDisplay = document.createTextNode("alignItems");
  
    // Создаём элемент <br> для перевода строки
    const lineBreak = document.createElement("br");
    
    // Добавляем элементы в контейнер, а затем в левую панель
    containerDisplay.appendChild(textHeadDisplay);
    containerDisplay.appendChild(lineBreak); // Добавляем перевод строки
     containerDisplay.appendChild(displayDropdown);
    containerDisplay.appendChild(textField);
    leftPane.appendChild(containerDisplay);
  }