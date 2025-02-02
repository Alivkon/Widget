"use strict";

var interactiveDiv = document.getElementById('interactive-div');
var itemList = document.getElementById('item-list');
var generateHtmlButton = document.getElementById('generate-html-button');
//const generatedHtmlTextarea = document.getElementById('generated-html')! as HTMLTextAreaElement;
// Получаем элементы DOM по их ID. Важно указать тип, чтобы TypeScript знал, что это HTMLInputElement и HTMLElement
var hiInput = document.getElementById('hi-Input');
var houtputDiv = document.getElementById('hi-output');
var wInput = document.getElementById('w-Input');
var woutputDiv = document.getElementById('w-output');
var generatedHtmlTextarea = document.getElementById('generated-html');
var buttonData = ['Connect', 'Disconnect', 'Reset', 'Available', 'Preparing', 'Charging', 'Finishing', 'Reserved', 'Unavailable', 'Faulted', 'Stop Transaction', 'Plug`n`Charge', 'EmergencyButton'];
var widthInteractiveDiv = interactiveDiv.style.width;
hiInput.style.width = "100px";
wInput.style.width = "100px";
buttonData.forEach(function (text, index) {
  // Add button elements to the interactive div
  var button = document.createElement('button');
  button.textContent = text;
  button.className = 'interactive-button';
  var buttonsContainer = document.getElementById('buttons-container');
  if (buttonsContainer) {
    buttonsContainer.appendChild(button);
  } else {
    console.error('Buttons container not found');
  }

  // Add corresponding list item with a checkbox
  var listItem = document.createElement('li');
  listItem.style.display = 'flex';
  listItem.style.alignItems = 'center';
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = "item-checkbox-".concat(index);
  checkbox.addEventListener('change', function (event) {
    button.style.display = event.target.checked ? 'inline-block' : 'none';
  });
  var label = document.createElement('label');
  label.htmlFor = "item-checkbox-".concat(index);
  label.textContent = text;
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  itemList.appendChild(listItem);

  // Hide button initially
  button.style.display = 'none';
});
function getElementHTML(selector) {
  var element = document.querySelector(selector);
  if (element) {
    return element.outerHTML;
  } else {
    return null;
  }
}
generateHtmlButton.addEventListener('click', function () {
  if (interactiveDiv) {
    var htmlContent = interactiveDiv.outerHTML;
    generatedHtmlTextarea.value = htmlContent;
  } else {
    console.error('Interactive div not found');
  }
});

// Добавляем обработчик события 'input'. Это событие срабатывает каждый раз,
// когда значение в поле ввода изменяется.
hiInput.addEventListener('input', function () {
  // Получаем текущее значение из поля ввода. Значение всегда возвращается 
  // как строка.
  var hi_inputValue = hiInput.value;
  //  Проверяем, не пустое ли поле ввода. Если пустое, ничего не делаем.
  if (hi_inputValue === "") {
    houtputDiv.textContent = ""; // Очищаем вывод
    generatedHtmlTextarea.style.height = 'auto';
    return;
  }
  // Преобразуем введенное значение в число с помощью parseInt. 
  // Основание 10 указывает на десятичную систему счисления.
  var numberValue = parseInt(hi_inputValue, 10);
  // Проверяем, удалось ли преобразование в число. isNaN (is Not a Number) возвращает true, 
  // если значение не является числом.
  if (isNaN(numberValue)) {
    houtputDiv.textContent = "Введено некорректное число"; // Выводим сообщение об ошибке
    hiInput.value = ""; // Очищаем поле ввода
    return; // Прерываем выполнение функции
  }
  // Если все проверки пройдены успешно, выводим число под полем ввода.
  houtputDiv.textContent = "Высота виджета: " + numberValue;
  interactiveDiv.style.height = numberValue + 'px';
});
wInput.addEventListener('input', function () {
  var winputValue = wInput.value;
  if (winputValue === "") {
    woutputDiv.textContent = "";
    interactiveDiv.style.width = 'auto';
    return;
  }
  var wnumberValue = parseInt(winputValue, 10);
  if (isNaN(wnumberValue)) {
    woutputDiv.textContent = "Введено некорректное число";
    wInput.value = "";
    return;
  }
  woutputDiv.textContent = "Ширина виджета: " + wnumberValue;
  interactiveDiv.style.width = wnumberValue + 'px';
});
// Dropdown

function addDropdownDisplay(leftPaneId) {
  // Ищем левую панель
  var leftPane = document.getElementById(leftPaneId);
  if (!leftPane) {
    console.error("Element with ID '".concat(leftPaneId, "' not found."));
    return;
  }

  // Создаём контейнер для выпадающего списка и текстового поля
  var container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.marginBottom = "20px";

  // Создаём выпадающий список
  var dropdown = document.createElement("select");
  dropdown.style.marginBottom = "10px";
  dropdown.style.width = "100px";

  // Слова для выпадающего списка
  var options = ["flex", "block", "none", "inline-block"];
  options.forEach(function (option) {
    var opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option;
    dropdown.appendChild(opt);
  });

  // Создаём текстовое поле
  var textField = document.createElement("input");
  textField.type = "text";
  textField.readOnly = true;
  textField.style.padding = "5px";
  textField.style.border = "1px solid #ccc";
  textField.style.borderRadius = "5px";
  textField.style.width = "100px";

  // Обработчик изменений для выпадающего списка
  dropdown.addEventListener("change", function () {
    textField.value = dropdown.value; // Обновляем текстовое поле при выборе
    var buttonsContainer = document.getElementById('buttons-container');
    if (buttonsContainer) {
      // Устанавливаем стиль display для buttons-container
      buttonsContainer.style.display = dropdown.value;
    } else {
      console.error('Buttons container not found');
    }
  });

  // Инициализируем текстовое поле первым значением
  textField.value = dropdown.value;

  // Добавляем элементы в контейнер, а затем в левую панель
  container.appendChild(dropdown);
  container.appendChild(textField);
  leftPane.appendChild(container);
}

// Вызов функции для добавления списка и текстового поля в левую панель
addDropdownDisplay("left-pane");
function addAlignmentDropdown(leftPaneId) {
  // Находим левую панель
  var leftPane = document.getElementById(leftPaneId);
  if (!leftPane) {
    console.error("Element with ID '".concat(leftPaneId, "' not found."));
    return;
  }

  // Создаем контейнер для выпадающего списка
  var container = document.createElement("div");
  container.style.marginBottom = "20px";

  // Создаем выпадающий список
  var dropdown = document.createElement("select");
  dropdown.style.width = "200px";
  dropdown.style.padding = "5px";
  dropdown.style.marginBottom = "10px";

  // Добавляем варианты в выпадающий список
  var options = ["row", "column"];
  options.forEach(function (option) {
    var opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option === "row" ? "По горизонтали" : "По вертикали";
    dropdown.appendChild(opt);
  });

  // Добавляем обработчик события для изменения выравнивания
  dropdown.addEventListener("change", function () {
    var buttonsContainer = document.getElementById("buttons-container");
    if (buttonsContainer) {
      buttonsContainer.style.flexDirection = dropdown.value;
    } else {
      console.error("Buttons container not found");
    }
  });

  // Инициализируем начальное значение
  var initialOption = options[0];
  dropdown.value = initialOption;

  // Добавляем выпадающий список в контейнер и контейнер в левую панель
  container.appendChild(dropdown);
  leftPane.appendChild(container);
}

// Вызываем функцию для добавления выпадающего списка
addAlignmentDropdown("left-pane");