//justify-content ["center", "start", "end", "left","right","flex-start", "flex-end", "space-between", "space-around", "space-evenly"];
export function addJustifyContentDropdown(leftPaneId: string): void {
    const leftPane = document.getElementById(leftPaneId);
    if (!leftPane) {
        console.error(`Element with ID '${leftPaneId}' not found.`);
        return;
    }
    // Создаём контейнер для выпадающего списка и текстового поля
    const containerJustifyContent = document.createElement("div");
    containerJustifyContent.style.marginBottom = "20px";
    containerJustifyContent.style.display = "flex";
    containerJustifyContent.id = "container-justify-content";
  
    // Создаём выпадающий список
    const justifyContentDropdown = document.createElement("select");
    justifyContentDropdown.id = "justify-content-dropdown";
    justifyContentDropdown.style.width = "200px";
    justifyContentDropdown.style.padding = "5px";
    justifyContentDropdown.style.marginBottom = "10px";
    justifyContentDropdown.style.display = "flex";
    // Слова для выпадающего списка
    const optionsJustifyContent = ["center", "start", "end", "left","right","flex-start", "flex-end", "space-between", "space-around", "space-evenly"];
    optionsJustifyContent.forEach(option => {
        const optJustifyContent = document.createElement("option");
        optJustifyContent.value = option;
        switch (option) {
            case "center":
              optJustifyContent.textContent = "По центру";
                break;
            case "start":
              optJustifyContent.textContent = "start";
                break;
            case "end":
              optJustifyContent.textContent = "end";
                break;
            case "left":
              optJustifyContent.textContent = "left";
                break;
            case "right":
              optJustifyContent.textContent = "right";
                break;
            case "flex-start":
              optJustifyContent.textContent = "flex-start";
                break;
            case "flex-end":
              optJustifyContent.textContent = "flex-end";
                break;
            case "space-between":
              optJustifyContent.textContent = "space-between";
                break;
            case "space-around":
              optJustifyContent.textContent = "space-around";
                break;
            case "space-evenly":
              optJustifyContent.textContent = "space-evenly";
                break;
        }
        justifyContentDropdown.appendChild(optJustifyContent);
    });
    // Создаём текстовое поле
    const textJustifyContent = document.createElement("p");
    textJustifyContent.id = "text-justify-content-output";
    textJustifyContent.textContent = optionsJustifyContent[0];
    // Обработчик изменений для выпадающего списка
    justifyContentDropdown.addEventListener("change", () => {
        const buttonsContainer = document.getElementById("buttons-container");
        if (buttonsContainer) {
            buttonsContainer.style.justifyContent = justifyContentDropdown.value;
            textJustifyContent.textContent = justifyContentDropdown.value;
            console.log("Change justifyContentDropdown");
        } else {
            console.error("Buttons container not found");
        }
    });
      // Создаём заголовок
      var textHeadJustifyContent = document.createTextNode("JustifyContent");
      // Создаём элемент <br> для перевода строки
      var lineBreak = document.createElement("br");
    
    // Добавляем элементы в контейнер, а затем в левую панель
    containerJustifyContent.appendChild(textHeadJustifyContent);
    containerJustifyContent.appendChild(lineBreak); // Добавляем перевод строки
    containerJustifyContent.appendChild(justifyContentDropdown);
    containerJustifyContent.appendChild(textJustifyContent);
    leftPane.appendChild(containerJustifyContent);
  }