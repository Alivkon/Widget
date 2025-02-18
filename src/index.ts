const interactiveDiv = document.getElementById('interactive-div')!;
const itemList = document.getElementById('item-list')!;
const generateHtmlButton = document.getElementById('generate-html-button')!;
const generatedHtmlTextarea = document.getElementById('generated-html')! as HTMLTextAreaElement;
  // Получаем элементы DOM по их ID. Важно указать тип, чтобы TypeScript знал, что это HTMLInputElement и HTMLElement
  const hiInput = document.getElementById('hi-Input') as HTMLInputElement;
  const houtputDiv = document.getElementById('hi-output') as HTMLElement;
  const wInput = document.getElementById('w-Input') as HTMLInputElement;
  const woutputDiv = document.getElementById('w-output') as HTMLElement;
  //const generatedHtmlTextarea = document.getElementById('generated-html') as HTMLTextAreaElement;
  const displayDropdown = document.getElementById('display-dropdown') as HTMLSelectElement;
  const flexDirectionDropdown= document.getElementById('flex-direction-dropdown') as HTMLSelectElement;
 // const justifyVerticaldropdown= document.getElementById('justify-vertical-dropdown') as HTMLSelectElement;
  var buttonData = [
  'Connect', 'Disconnect', 'Reset','Available', 'Preparing',  'Charging', 
  'Finishing', 'Reserved', 'Unavailable', 'Faulted', 'Stop Transaction', 
  'Plug`n`Charge', 'EmergencyButton'
];
var widthInteractiveDiv = interactiveDiv.style.width;
hiInput.style.width = "100px";
hiInput.value = "100";
interactiveDiv.style.height = "100px";
wInput.style.width = "100px";
wInput.value = "600";
interactiveDiv.style.width = "600px";

buttonData.forEach((text, index) => {
  // Add button elements to the interactive div
  const button = document.createElement('button');
  button.textContent = text;
  button.className = 'interactive-button';
  const buttonsContainer = document.getElementById('buttons-container');
  if (buttonsContainer) {
    buttonsContainer.appendChild(button);
  } else {
    console.error('Buttons container not found');
  }
  // Set button styles
  button.style.width='100px';
  button.style.height='50px';
  // Add corresponding list item with a checkbox
  const listItem = document.createElement('li');
  listItem.style.display = 'flex';
  listItem.style.alignItems = 'center';
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `item-checkbox-${index}`;
  checkbox.addEventListener('change', (event) => {
    button.style.display = (event.target as HTMLInputElement).checked ? 'inline-block' : 'none';
  });

  const label = document.createElement('label');
  label.htmlFor = `item-checkbox-${index}`;
  label.textContent = text;

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  itemList.appendChild(listItem);

  // Hide button initially
  button.style.display = 'none';

});
function getElementHTML(selector: string) {
  var element = document.querySelector(selector);
  if (element) {
      return element.outerHTML;
  }
  else {
      return null;
  }
}
generateHtmlButton.addEventListener('click', () => {
    if (interactiveDiv) {
      const htmlContent = interactiveDiv.outerHTML;
      generatedHtmlTextarea.value = htmlContent;
    } else {
      console.error('Interactive div not found');
    }
  });
// Добавляем обработчик события 'input'. 
hiInput.addEventListener('input', () => {
    // Получаем текущее значение из поля ввода. 
    let hi_inputValue = hiInput.value;
  //  Проверяем, не пустое ли поле ввода. Если пустое, ничего не делаем.
    if (hi_inputValue === "") {
        houtputDiv.textContent = ""; // Очищаем вывод
        generatedHtmlTextarea.style.height = 'auto';
        return;
    }
    numberValue= 100;
    // Преобразуем введенное значение в число с помощью parseInt. 
    // Основание 10 указывает на десятичную систему счисления.
    var numberValue: number = parseInt(hi_inputValue, 10);
    // Проверяем, удалось ли преобразование в число. isNaN (is Not a Number) возвращает true, 
    // если значение не является числом.
    if (isNaN(numberValue)) {
        houtputDiv.textContent = "Введено некорректное число"; // Выводим сообщение об ошибке
        hiInput.value = ""; // Очищаем поле ввода
        return; // Прерываем выполнение функции
    }
    // Если все проверки пройдены успешно, выводим число под полем ввода.
    houtputDiv.textContent = "Высота виджета: " + numberValue;
    interactiveDiv.style.height=numberValue+'px'
});
wInput.addEventListener('input', () => {
  let winputValue = wInput.value;
  if (winputValue === "") {
      woutputDiv.textContent = ""; 
      interactiveDiv.style.width = 'auto'
      return;
  }
  var wnumberValue: number = parseInt(winputValue, 10);
  if (isNaN(wnumberValue)) {
      woutputDiv.textContent = "Введено некорректное число"; 
      wInput.value = ""; 
      return; 
  }
  woutputDiv.textContent = "Ширина виджета: " + wnumberValue;
  interactiveDiv.style.width=wnumberValue+'px'
});
//display ["flex","grid", "block", "none", "inline-block"]
function addDisplayDropdown(leftPaneId: string): void {
  const leftPane = document.getElementById(leftPaneId);
  if (!leftPane) {
      console.error(`Element with ID '${leftPaneId}' not found.`);
      return;
  }
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexDirection = "row";
  container.style.marginBottom = "15px";
  container.style.border = "2px solid #ccc";
  container.style.borderRadius = "5px";

  const displayDropdown = document.createElement("select");
  displayDropdown.id = "display-dropdown"; // Ensure the ID is set
  displayDropdown.style.marginBottom = "10px";
  displayDropdown.style.width = "75px";
  displayDropdown.style.height = "30px";
  displayDropdown.value = "flex";

  const options = ["flex", "grid", "block", "none", "inline-block"];
  options.forEach(option => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      displayDropdown.appendChild(opt);
  });

  const textField = document.createElement("input");
  textField.type = "text";
  textField.readOnly = true;
  textField.style.padding = "10px";
  textField.value = options[0]; // Инициализируем первым значением

  displayDropdown.addEventListener("change", () => {
  textField.value = displayDropdown.value;
  chooseDisplayDropdown(); // Call the function here
  const buttonsContainer = document.getElementById("buttons-container");
      if (buttonsContainer) {
          buttonsContainer.style.display = displayDropdown.value;
      } else {
          console.error("Buttons container not found");
      }
  });


  container.appendChild(displayDropdown);
  container.appendChild(textField);
  leftPane.appendChild(container);
}
//flex-direction ["row", "row-reverse", "column", "column-reverse"];
function addFlexDirectionDropdown(leftPaneId: string): void {
  const leftPane = document.getElementById(leftPaneId);
  if (!leftPane) {
      console.error(`Element with ID '${leftPaneId}' not found.`);
      return;
  }

  const containerFlexDirection = document.createElement("div");
  containerFlexDirection.style.marginBottom = "20px";
  containerFlexDirection.style.display = "flex";
  containerFlexDirection.id = "container-flex-direction";

  const flexDirectionDropdown = document.createElement("select");
  flexDirectionDropdown.id = "flex-direction-dropdown";
  flexDirectionDropdown.style.width = "200px";
  flexDirectionDropdown.style.padding = "5px";
  flexDirectionDropdown.style.marginBottom = "10px";
  flexDirectionDropdown.style.display = "flex";

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

  const textFlexDirection = document.createElement("p");
  textFlexDirection.id = "text-horizontal-align-output";
  textFlexDirection.textContent = optionsRowColAlign[0];

  flexDirectionDropdown.addEventListener("change", () => {
      const buttonsContainer = document.getElementById("buttons-container");
      if (buttonsContainer) {
          buttonsContainer.style.flexDirection = flexDirectionDropdown.value;
          textFlexDirection.textContent = flexDirectionDropdown.value;
      } else {
          console.error("Buttons container not found");
      }
  });

  containerFlexDirection.appendChild(flexDirectionDropdown);
  containerFlexDirection.appendChild(textFlexDirection);
  leftPane.appendChild(containerFlexDirection);
}
function addFlexWrapDropdown(leftPaneId: string): void {
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
  flexWrapDropdown.style.width = "200px";
  flexWrapDropdown.style.padding = "5px";
  flexWrapDropdown.style.marginBottom = "10px";
  flexWrapDropdown.style.display = "flex";
  flexWrapDropdown.id = "flex-wrap-dropdown";
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

  flexWrapDropdown.addEventListener("change", () => {
      const buttonsContainer = document.getElementById("buttons-container");
      if (buttonsContainer) {
        buttonsContainer.style.flexWrap = flexWrapDropdown.value; // Исправлено
        textFlexWrapDirection.textContent = flexWrapDropdown.value;
      } else {
          console.error("Buttons container not found");
      }
  });

  containerFlexWrap.appendChild(flexWrapDropdown);
  containerFlexWrap.appendChild(textFlexWrapDirection);
  leftPane.appendChild(containerFlexWrap);
}
function showFlexWrapDropdown(): void {
  const flexWrapDropdown = document.getElementById("container-flex-wrap");
  if (flexWrapDropdown) {
    flexWrapDropdown.style.display = "flex";
    console.info("container-flex-wrap для show нашёлся") ;}
  else {console.info("container-flex-wrap для show not found");}
}
function hideFlexWrapDropdown(): void {
  const flexWrapDropdown = document.getElementById("container-flex-wrap");
  if (flexWrapDropdown) {
    flexWrapDropdown.style.display = "none";
    console.info("container-flex-wrap для hide нашёлся") ;}
  else {console.info("container-flex-wrap для hide not found");}
}
//writingMode ["horizontal-tb","vertical-rl","vertical-lr","sideways-rl","sideways-lr"];
function addWritingModeDropdown(leftPaneId: string): void {
  // Ищем левую панель
  const leftPane = document.getElementById(leftPaneId);
  if (!leftPane) {
      console.error(`Element with ID '${leftPaneId}' not found.`);
      return;
  }

  // Создаём контейнер для выпадающего списка и текстового поля
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.marginBottom = "20px";

  // Создаём выпадающий список
  const dropdown = document.createElement("select");
  dropdown.style.marginBottom = "10px";
  dropdown.style.width = "100px";
  dropdown.id = "writing-mode-dropdown";

  // Слова для выпадающего списка
  const options = ["horizontal-tb","vertical-rl","vertical-lr","sideways-rl","sideways-lr"];
  options.forEach(option => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      dropdown.appendChild(opt);
  });

  // Создаём текстовое поле
  const textField = document.createElement("input");
  textField.type = "text";
  textField.readOnly = true;
  textField.style.padding = "5px";
  textField.style.border = "1px solid #ccc";
  textField.style.borderRadius = "5px";
  textField.style.width = "100px";

  // Обработчик изменений для выпадающего списка
  dropdown.addEventListener("change", () => {
      textField.value = dropdown.value; // Обновляем текстовое поле при выборе
      const buttonsContainer = document.getElementById('buttons-container');
      if (buttonsContainer) {
          buttonsContainer.style.writingMode = dropdown.value;
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
//justifyContent ["flex-start", "center", "flex-end", "space-between"];
function addJustifyHorizontalDropdown(leftPaneId: string): void {
  // Ищем левую панель
  const leftPane = document.getElementById(leftPaneId);
  if (!leftPane) {
      console.error(`Element with ID '${leftPaneId}' not found.`);
      return;
  }

  // Создаём контейнер для выпадающего списка и текстового поля
  const container = document.createElement("div");
  container.style.justifyContent = "flex";
  container.style.flexDirection = "column";
  container.style.marginBottom = "20px";
  container.id = "container-justify-horizontal";

  // Создаём выпадающий список
  const dropdown = document.createElement("select");
  dropdown.style.marginBottom = "10px";
  dropdown.style.width = "100px";
  dropdown.id = "justify-horizontal-dropdown";

  // Слова для выпадающего списка
  const options = ["flex-start", "center", "flex-end", "space-between"];
  options.forEach(option => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      dropdown.appendChild(opt);
  });

  // Создаём текстовое поле
  const textField = document.createElement("input");
  textField.type = "text";
  textField.readOnly = true;
  textField.style.padding = "5px";
  textField.style.border = "1px solid #ccc";
  textField.style.borderRadius = "5px";
  textField.style.width = "100px";

  // Обработчик изменений для выпадающего списка
  dropdown.addEventListener("change", () => {
      textField.value = dropdown.value; // Обновляем текстовое поле при выборе
      const buttonsContainer = document.getElementById('buttons-container');
      if (buttonsContainer) {
          // Устанавливаем стиль display для buttons-container
          buttonsContainer.style.justifyContent = dropdown.value;
      } else {
          console.error('Buttons container not found');
      }
  });

  // Инициализируем текстовое поле первым значением
  textField.value = dropdown.value;
  const textFieldHorizontAlign = document.createElement('p');

  textFieldHorizontAlign.id = 'textOutput';
 // Добавляем контейнер в левую панель
  if (leftPane) {
    leftPane.appendChild(container);
  }
  textFieldHorizontAlign.textContent = 'Выравнивание по горизонтали:';
  // Добавляем чекбокс и текстовое поле в контейнер
  container.appendChild(textFieldHorizontAlign);
  // Добавляем элементы в контейнер, а затем в левую панель
  container.appendChild(dropdown);
  container.appendChild(textField);
  leftPane.appendChild(container);
}
function addJustifyVerticalDropdown(leftPaneId: string): void {
  // Ищем левую панель
  const leftPane = document.getElementById(leftPaneId);
  if (!leftPane) {
      console.error(`Element with ID '${leftPaneId}' not found.`);
      return;
  }

  // Создаём контейнер для выпадающего списка и текстового поля
  const containerVerticalAlign = document.createElement("div");
  containerVerticalAlign.style.alignItems = "flex";
  //containerVerticalAlign.style.flexDirection = "column";
  containerVerticalAlign.style.marginBottom = "20px";
  containerVerticalAlign.id = "container-justify-vertical";
  containerVerticalAlign.style.display = "flex";

  // Создаём выпадающий список
  const justifyVerticaldropdown = document.createElement("select");
  justifyVerticaldropdown.style.marginBottom = "10px";
  justifyVerticaldropdown.style.width = "100px";
  justifyVerticaldropdown.id = "justify-vertical-dropdown";

  // Слова для выпадающего списка
  const options = ["flex-start", "center", "flex-end", "space-between"];
  options.forEach(option => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      justifyVerticaldropdown.appendChild(opt);
  });
  // Создаём текстовое поле
  const textField = document.createElement("input");
  textField.type = "text";
  textField.readOnly = true;
  textField.style.padding = "5px";
  textField.style.border = "1px solid #ccc";
  textField.style.borderRadius = "5px";
  textField.style.width = "100px";
  // Обработчик изменений для выпадающего списка
  justifyVerticaldropdown.addEventListener("change", () => {
      textField.value = justifyVerticaldropdown.value; // Обновляем текстовое поле при выборе
      const buttonsContainer = document.getElementById('buttons-container');
      if (buttonsContainer) {
          // Устанавливаем стиль display для buttons-container
          buttonsContainer.style.alignItems = justifyVerticaldropdown.value;
      } else {
          console.error('Buttons container not found');
      }
  });
  // Инициализируем текстовое поле первым значением
  textField.value = justifyVerticaldropdown.value;
  const textFieldHorizontAlign = document.createElement('p');

  textFieldHorizontAlign.id = 'textOutput';
 // Добавляем контейнер в левую панель
  if (leftPane) {
    leftPane.appendChild(containerVerticalAlign);
  }
  // Добавляем элементы в контейнер, а затем в левую панель
  containerVerticalAlign.appendChild(textFieldHorizontAlign);
  containerVerticalAlign.appendChild(justifyVerticaldropdown);
  containerVerticalAlign.appendChild(textField);
  leftPane.appendChild(containerVerticalAlign);
}
function hideJustifyVerticalDropdown(): void {
  const justifyVerticalDropdown2 = document.getElementById("container-justify-vertical");
  if (justifyVerticalDropdown2) {
    console.info("container-justify-vertical нашёлся");
    justifyVerticalDropdown2.style.display = "none";
    }
    else {console.info("container-justify-vertical not found");}
}
function hideFlexDirectionDropdown(): void {
  const flexDirectionDropdown2 = document.getElementById("container-flex-direction");
  if (flexDirectionDropdown2) {
    flexDirectionDropdown2.style.display = "none";
    console.info("container-flex-direction нашёлся") ;}
    else {console.info("container-flex-direction not found");}
}
function showFlexDirectionDropdown(): void {
  const flexDirectionDropdown3 = document.getElementById("container-flex-direction");
  if (flexDirectionDropdown3) {
    flexDirectionDropdown3.style.display = "flex";
    console.info("container-flex-direction нашёлся") ;}
  else {console.info("container-flex-direction not found");}
}
function showJustifyVerticalDropdown(): void {
  const justifyVerticalDropdown2 = document.getElementById("container-justify-vertical");
  if (justifyVerticalDropdown2) {
    console.info("container-justify-vertical нашёлся");
    justifyVerticalDropdown2.style.display = "flex";
    }
    else {console.info("container-justify-vertical not found");}
}
function chooseDisplayDropdown(): void {
  const displayDropdown1 = document.getElementById("display-dropdown") as HTMLSelectElement;
  if (displayDropdown1.value === "flex") {
    showFlexDirectionDropdown();
    showFlexWrapDropdown();
    hideJustifyVerticalDropdown();
  } else if (displayDropdown1.value === "grid") {
    showJustifyVerticalDropdown();
    hideFlexWrapDropdown();
    hideFlexDirectionDropdown();
  } else {
    hideFlexDirectionDropdown();
    hideJustifyVerticalDropdown();
  }
}
//showJustifyVerticalDropdown();
//add elements to site
addDisplayDropdown("left-pane");
addFlexDirectionDropdown("left-pane");
addJustifyVerticalDropdown("left-pane");
addFlexWrapDropdown("left-pane");
chooseDisplayDropdown();

//hideflexDirectionDropdown();
//hideJustifyVerticalDropdown();
//addWritingModeDropdown("left-pane");
//addJustifyHorizontalDropdown("left-pane");



//  function addAfterDisplay(displayDropdown: string): void {
// //   const dispDrop = displayDropdown;
//    if (displayDropdown === "flex") {
//     flexDirectionDropdown.style.display = "flex";
//   }
//   else {
//     flexDirectionDropdown.style.display = "none";
//   }}
