"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addWritingModeDropdown = addWritingModeDropdown;
//writingMode ["horizontal-tb","vertical-rl","vertical-lr","sideways-rl","sideways-lr"];
function addWritingModeDropdown(leftPaneId) {
  // Ищем левую панель
  var leftPane = document.getElementById(leftPaneId);
  if (!leftPane) {
    console.error("Element with ID '".concat(leftPaneId, "' not found."));
    return;
  }

  // Создаём контейнер для выпадающего списка и текстового поля
  var containerWritingMode = document.createElement("div");
  containerWritingMode.style.marginBottom = "20px";
  containerWritingMode.style.display = "flex";
  containerWritingMode.id = "container-writing-mode";
  // Создаём выпадающий список
  var dropdownWritingMode = document.createElement("select");
  dropdownWritingMode.id = "writing-mode-dropdown";
  dropdownWritingMode.style.width = "200px";
  dropdownWritingMode.style.marginBottom = "10px";
  dropdownWritingMode.style.padding = "10px";
  dropdownWritingMode.style.display = "flex";

  // Слова для выпадающего списка
  var options = ["horizontal-tb", "vertical-rl", "vertical-lr", "sideways-rl", "sideways-lr"];
  options.forEach(function (option) {
    var opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option;
    dropdownWritingMode.appendChild(opt);
  });

  // Создаём текстовое поле
  var textWritingMode = document.createElement("p");
  textWritingMode.id = "text-writing-mode-output";
  textWritingMode.textContent = options[0];

  // Обработчик изменений для выпадающего списка
  dropdownWritingMode.addEventListener("change", function () {
    var buttonsContainer = document.getElementById('buttons-container');
    if (buttonsContainer) {
      buttonsContainer.style.writingMode = dropdownWritingMode.value;
      textWritingMode.textContent = dropdownWritingMode.value;
    } else {
      console.error('Buttons container not found');
    }
  });
  // Создаём заголовок
  var textHeadwritingMode = document.createTextNode("writingMode");

  // Создаём элемент <br> для перевода строки
  var lineBreak = document.createElement("br");

  // Добавляем элементы в контейнер, а затем в левую панель
  containerWritingMode.appendChild(textHeadwritingMode);
  containerWritingMode.appendChild(lineBreak); // Добавляем перевод строки
  containerWritingMode.appendChild(dropdownWritingMode);
  containerWritingMode.appendChild(textWritingMode);
  leftPane.appendChild(containerWritingMode);
}