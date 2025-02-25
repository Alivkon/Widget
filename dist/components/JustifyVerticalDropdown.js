"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addJustifyVerticalDropdown = addJustifyVerticalDropdown;
//justifyContent ["flex-start", "center", "flex-end", "space-between"];
function addJustifyVerticalDropdown(leftPaneId) {
  // Ищем левую панель
  var leftPane = document.getElementById(leftPaneId);
  if (!leftPane) {
    console.error("Element with ID '".concat(leftPaneId, "' not found."));
    return;
  }

  // Создаём контейнер для выпадающего списка и текстового поля
  var containerVerticalAlign = document.createElement("div");
  containerVerticalAlign.style.marginBottom = "20px";
  containerVerticalAlign.style.display = "flex";
  containerVerticalAlign.id = "container-justify-vertical";
  // Создаём выпадающий список
  var justifyVerticaldropdown = document.createElement("select");
  justifyVerticaldropdown.id = "justify-vertical-dropdown";
  justifyVerticaldropdown.style.width = "200px";
  justifyVerticaldropdown.style.padding = "5px";
  justifyVerticaldropdown.style.marginBottom = "10px";
  justifyVerticaldropdown.style.display = "flex";
  // Слова для выпадающего списка
  var options = ["normal", "stretch", "center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "anchor-center", "baseline", "firstbaseline", "lastbaseline", "safecenter", "unsafecenter"];
  options.forEach(function (option) {
    var opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option;
    justifyVerticaldropdown.appendChild(opt);
  });
  // Создаём текстовое поле
  var textVerticalAlign = document.createElement("p");
  textVerticalAlign.id = "text-justify-vertical-output";
  textVerticalAlign.textContent = options[0];
  // Обработчик изменений для выпадающего списка
  justifyVerticaldropdown.addEventListener("change", function () {
    textVerticalAlign.textContent = justifyVerticaldropdown.value; // Обновляем текстовое поле при выборе
    var buttonsContainer = document.getElementById('buttons-container');
    if (buttonsContainer) {
      // Устанавливаем стиль align-items для buttons-container
      buttonsContainer.style.alignItems = justifyVerticaldropdown.value;
      console.info('buttonsContainer.style.alignItems = ' + justifyVerticaldropdown.value);
    } else {
      console.error('Buttons container not found');
    }
  });

  // Инициализируем текстовое поле 
  textVerticalAlign.textContent = justifyVerticaldropdown.value;
  var textFieldHorizontAlign = document.createElement('p');
  textFieldHorizontAlign.id = 'textOutput';

  // Создаём заголовок
  var textHeadVerticalAlign = document.createTextNode("alignItems");

  // Создаём элемент <br> для перевода строки
  var lineBreak = document.createElement("br");

  // Добавляем элементы в контейнер, а затем в левую панель
  containerVerticalAlign.appendChild(textHeadVerticalAlign);
  containerVerticalAlign.appendChild(lineBreak); // Добавляем перевод строки
  containerVerticalAlign.appendChild(justifyVerticaldropdown);
  containerVerticalAlign.appendChild(textVerticalAlign);
  leftPane.appendChild(containerVerticalAlign);
}