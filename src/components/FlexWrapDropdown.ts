export function addFlexWrapDropdown(leftPaneId: string): void {
        // Ищем левую панель
  const leftPane = document.getElementById(leftPaneId);
    if (!leftPane) {
        console.error(`Element with ID '${leftPaneId}' not found.`);
        return;
    }
   // Создаём контейнер для выпадающего списка и текстового поля
    const containerFlexWrap = document.createElement("div");
    containerFlexWrap.style.marginBottom = "20px";
    containerFlexWrap.style.display = "flex";
    containerFlexWrap.id = "container-flex-wrap";
     // Создаём выпадающий список
    const flexWrapDropdown = document.createElement("select");
    flexWrapDropdown.id = "flex-wrap-dropdown";    
    flexWrapDropdown.style.width = "200px";
    flexWrapDropdown.style.padding = "5px";
    flexWrapDropdown.style.marginBottom = "10px";
    flexWrapDropdown.style.display = "flex";
    // Слова для выпадающего списка
    const optionsRowWrap = ["wrap", "nowrap", "wrap-reverse"];
    optionsRowWrap.forEach(option => {
        const optionsRowWrap = document.createElement("option");
        optionsRowWrap.value = option;
        switch (option) {
            case "wrap":
              optionsRowWrap.textContent = "Вписано";
                break;
            case "nowrap":
              optionsRowWrap.textContent = "Не вписано";
                break;
            case "wrap-reverse":
              optionsRowWrap.textContent = "Вписано (обратно)";
                break;
        }
        flexWrapDropdown.appendChild(optionsRowWrap);
    });
  
    const textFlexWrapDirection = document.createElement("p");
    textFlexWrapDirection.id = "text-wrap-output";
    textFlexWrapDirection.textContent = optionsRowWrap[0];

      // Обработчик изменений для выпадающего списка
    flexWrapDropdown.addEventListener("change", () => {
        const buttonsContainer = document.getElementById("buttons-container");
        console.log("Change flexWrapDropdown");
        if (buttonsContainer) {
          buttonsContainer.style.flexWrap = flexWrapDropdown.value; // Исправлено
          textFlexWrapDirection.textContent = flexWrapDropdown.value;
          console.log('Change FlexWrapDropdown');        
        } else {
            console.error("Buttons container not found");
        }
    });
    // Создаём заголовок
    var textHeadFlexWrap = document.createTextNode("flexWrap");
    // Создаём элемент <br> для перевода строки
    var lineBreak = document.createElement("br");
  
      // Добавляем элементы в контейнер, а затем в левую панель
    containerFlexWrap.appendChild(textHeadFlexWrap);
    containerFlexWrap.appendChild(lineBreak); // Добавляем перевод строки
    containerFlexWrap.appendChild(flexWrapDropdown);
    containerFlexWrap.appendChild(textFlexWrapDirection);
    leftPane.appendChild(containerFlexWrap);
  }