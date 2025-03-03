//flex-direction ["row", "row-reverse", "column", "column-reverse"];
export function addFlexDirectionDropdown(leftPaneId: string): void {
    // Ищем левую панель
  const leftPane = document.getElementById(leftPaneId);
  if (!leftPane) {
      console.error(`Element with ID '${leftPaneId}' not found.`);
      return;
  }
  // Создаём контейнер для выпадающего списка и текстового поля
  const containerFlexDirection = document.createElement("div");
  containerFlexDirection.style.marginBottom = "20px";
  containerFlexDirection.style.display = "flex";
  containerFlexDirection.id = "container-flex-direction";
 // Создаём выпадающий список
  const flexDirectionDropdown = document.createElement("select");
  flexDirectionDropdown.id = "flex-direction-dropdown";
  flexDirectionDropdown.style.width = "200px";
  flexDirectionDropdown.style.padding = "5px";
  flexDirectionDropdown.style.marginBottom = "10px";
  flexDirectionDropdown.style.display = "flex";
  // Слова для выпадающего списка
  const optionsRowColAlign = ["row", "row-reverse", "column", "column-reverse"];
  optionsRowColAlign.forEach(option => {
      const optRowColAlign = document.createElement("option");
      optRowColAlign.value = option;
      switch (option) {
          case "row":
              optRowColAlign.textContent = "Горизонтально";
              break;
          case "row-reverse":
              optRowColAlign.textContent = "Горизонтально (обратно)";
              break;
          case "column":
              optRowColAlign.textContent = "Вертикально";
              break;
          case "column-reverse":
              optRowColAlign.textContent = "Вертикально (обратно)";
              break;
      }
      flexDirectionDropdown.appendChild(optRowColAlign);
  });
  // Создаём текстовое поле
  const textFlexDirection = document.createElement("p");
  textFlexDirection.id = "text-horizontal-align-output";
  textFlexDirection.textContent = optionsRowColAlign[0];
  // Обработчик изменений для выпадающего списка
  flexDirectionDropdown.addEventListener("change", () => {
      const buttonsContainer = document.getElementById("buttons-container");
      if (buttonsContainer) {
          buttonsContainer.style.flexDirection = flexDirectionDropdown.value;
          textFlexDirection.textContent = flexDirectionDropdown.value;
          console.log("Change flexDirectionDropdown");
      } else {
          console.error("Buttons container not found");
      }
  });

  // Создаём заголовок
  const textHeadFlexDirection = document.createTextNode("flexDirection");

  // Создаём элемент <br> для перевода строки
  const lineBreak = document.createElement("br");
  
  // Добавляем элементы в контейнер, а затем в левую панель
  containerFlexDirection.appendChild(textHeadFlexDirection);
  containerFlexDirection.appendChild(lineBreak); // Добавляем перевод строки
  containerFlexDirection.appendChild(flexDirectionDropdown);
  containerFlexDirection.appendChild(textFlexDirection);
  leftPane.appendChild(containerFlexDirection);
}