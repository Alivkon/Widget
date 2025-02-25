"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addFlexDirectionDropdown = addFlexDirectionDropdown;
//flex-direction ["row", "row-reverse", "column", "column-reverse"];
function addFlexDirectionDropdown(leftPaneId) {
  // Ищем левую панель
  var leftPane = document.getElementById(leftPaneId);
  if (!leftPane) {
    console.error("Element with ID '".concat(leftPaneId, "' not found."));
    return;
  }
  // Создаём контейнер для выпадающего списка и текстового поля
  var containerFlexDirection = document.createElement("div");
  containerFlexDirection.style.marginBottom = "20px";
  containerFlexDirection.style.display = "flex";
  containerFlexDirection.id = "container-flex-direction";
  // Создаём выпадающий список
  var flexDirectionDropdown = document.createElement("select");
  flexDirectionDropdown.id = "flex-direction-dropdown";
  flexDirectionDropdown.style.width = "200px";
  flexDirectionDropdown.style.padding = "5px";
  flexDirectionDropdown.style.marginBottom = "10px";
  flexDirectionDropdown.style.display = "flex";
  // Слова для выпадающего списка
  var optionsRowColAlign = ["row", "row-reverse", "column", "column-reverse"];
  optionsRowColAlign.forEach(function (option) {
    var optRowColAlign = document.createElement("option");
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
  var textFlexDirection = document.createElement("p");
  textFlexDirection.id = "text-horizontal-align-output";
  textFlexDirection.textContent = optionsRowColAlign[0];
  // Обработчик изменений для выпадающего списка
  flexDirectionDropdown.addEventListener("change", function () {
    var buttonsContainer = document.getElementById("buttons-container");
    if (buttonsContainer) {
      buttonsContainer.style.flexDirection = flexDirectionDropdown.value;
      textFlexDirection.textContent = flexDirectionDropdown.value;
    } else {
      console.error("Buttons container not found");
    }
  });

  // Создаём заголовок
  var textHeadFlexDirection = document.createTextNode("flexDirection");

  // Создаём элемент <br> для перевода строки
  var lineBreak = document.createElement("br");

  // Добавляем элементы в контейнер, а затем в левую панель
  containerFlexDirection.appendChild(textHeadFlexDirection);
  containerFlexDirection.appendChild(lineBreak); // Добавляем перевод строки
  containerFlexDirection.appendChild(flexDirectionDropdown);
  containerFlexDirection.appendChild(textFlexDirection);
  leftPane.appendChild(containerFlexDirection);
}