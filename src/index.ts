import { generateButtons } from "./components/ButtonGenerator";
import { addDisplayDropdown } from "./components/DisplayDropdown";
import { addFlexDirectionDropdown } from "./components/FlexDirectionDropdown";
import { addWritingModeDropdown } from "./components/WritingModeDropdown";


const interactiveDiv = document.getElementById('buttons-container')!;
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
  const justifyVerticaldropdown= document.getElementById('justify-vertical-dropdown') as HTMLSelectElement;
  const flexWrapDropdown = document.getElementById('flex-wrap-dropdown') as HTMLSelectElement;
  const dropdownWritingMode = document.getElementById('writing-mode-dropdown') as HTMLSelectElement;
  var buttonData = [
  'Connect', 'Disconnect', 'Reset','Available', 'Preparing',  'Charging', 
  'Finishing', 'Reserved', 'Unavailable', 'Faulted', 'Stop Transaction', 
  'Plug`n`Charge', 'EmergencyButton'
];
var widthInteractiveDiv = interactiveDiv.style.width;
hiInput.style.width = "100px";
hiInput.value = "100";
interactiveDiv.style.height = hiInput.value+'px';
wInput.style.width = "100px";
wInput.value = "600";
interactiveDiv.style.width = wInput.value+'px';

// Генерация кнопок

//function generateButtons(buttonData: string[], buttonsContainerId: string, itemListId: string): void {

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
  
//}
generateButtons(buttonData, 'buttons-container', 'item-list');
// Инициализация выпадающих списков
addDisplayDropdown("left-pane");
addFlexDirectionDropdown("left-pane");
addWritingModeDropdown("left-pane");

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
    //numberValue= 100;
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


//justify-content ["center", "start", "end", "left","right","flex-start", "flex-end", "space-between", "space-around", "space-evenly"];
function addJustifyContentDropdown(leftPaneId: string): void {
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
function showJustifyContentDropdown(): void {
  const JustifyContentDropdown = document.getElementById("container-justify-content");
  if (JustifyContentDropdown) {
    JustifyContentDropdown.style.display = "flex";
    console.info("container-justify-content для show нашёлся") ;}
  else {console.info("container-justify-content для show not found");}
}

function hideJustifyContentDropdown(): void {
  const JustifyContentDropdown = document.getElementById("container-justify-content");
  if (JustifyContentDropdown) {
    JustifyContentDropdown.style.display = "none";
    console.info("container-justify-content для hide нашёлся") ;}
  else {console.info("container-justify-content для hide not found");}
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

//justifyContent ["flex-start", "center", "flex-end", "space-between"];
function addJustifyVerticalDropdown(leftPaneId: string): void {
  // Ищем левую панель
  const leftPane = document.getElementById(leftPaneId);
  if (!leftPane) {
      console.error(`Element with ID '${leftPaneId}' not found.`);
      return;
  }

  // Создаём контейнер для выпадающего списка и текстового поля
  const containerVerticalAlign = document.createElement("div");
  containerVerticalAlign.style.marginBottom = "20px";
  containerVerticalAlign.style.display = "flex";
  containerVerticalAlign.id = "container-justify-vertical";  
  // Создаём выпадающий список
  const justifyVerticaldropdown = document.createElement("select");
  justifyVerticaldropdown.id = "justify-vertical-dropdown";
  justifyVerticaldropdown.style.width = "200px";  
  justifyVerticaldropdown.style.padding = "5px";
  justifyVerticaldropdown.style.marginBottom = "10px";
  justifyVerticaldropdown.style.display = "flex";
  // Слова для выпадающего списка
  const options = ["normal","stretch","center","start","end","flex-start","flex-end","self-start","self-end","anchor-center","baseline","firstbaseline","lastbaseline","safecenter","unsafecenter"];
  options.forEach(option => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      justifyVerticaldropdown.appendChild(opt);
  });
  // Создаём текстовое поле
  const textVerticalAlign = document.createElement("p");
  textVerticalAlign.id = "text-justify-vertical-output";
  textVerticalAlign.textContent = options[0];
  // Обработчик изменений для выпадающего списка
  justifyVerticaldropdown.addEventListener("change", () => {
    textVerticalAlign.textContent = justifyVerticaldropdown.value; // Обновляем текстовое поле при выборе
      const buttonsContainer = document.getElementById('buttons-container');
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
  const textFieldHorizontAlign = document.createElement('p');
  textFieldHorizontAlign.id = 'textOutput';

  // Создаём заголовок
  const textHeadVerticalAlign = document.createTextNode("alignItems");

  // Создаём элемент <br> для перевода строки
  const lineBreak = document.createElement("br");
  
  // Добавляем элементы в контейнер, а затем в левую панель
  containerVerticalAlign.appendChild(textHeadVerticalAlign);
  containerVerticalAlign.appendChild(lineBreak); // Добавляем перевод строки
  containerVerticalAlign.appendChild(justifyVerticaldropdown);
  containerVerticalAlign.appendChild(textVerticalAlign);
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
  const displayDropdown = document.getElementById("display-dropdown") as HTMLSelectElement;
  if (displayDropdown.value === "flex") {
    // Показываем настройки для Flexbox
    showFlexDirectionDropdown();
    showFlexWrapDropdown();
    showJustifyVerticalDropdown();
    showJustifyContentDropdown();
} else if (displayDropdown.value === "grid") {
    // Показываем настройки для Grid
    hideJustifyVerticalDropdown();
    hideFlexDirectionDropdown();
    hideFlexWrapDropdown();
    showJustifyContentDropdown();    
} else if (displayDropdown.value === "block" || displayDropdown.value === "none" || displayDropdown.value === "inline-block") {
    // Скрываем все специфические настройки
    hideFlexDirectionDropdown();
    hideJustifyVerticalDropdown();
    hideFlexWrapDropdown();
    showJustifyContentDropdown();      
}

}
//showJustifyVerticalDropdown();
//add elements to site
//addWritingModeDropdown("left-pane");

//addDisplayDropdown("left-pane");

//addFlexDirectionDropdown("left-pane");
addJustifyVerticalDropdown("left-pane");
addFlexWrapDropdown("left-pane");

addJustifyContentDropdown("left-pane");
showJustifyContentDropdown();
chooseDisplayDropdown();

interactiveDiv.style.alignItems = displayDropdown.value;
interactiveDiv.style.flexDirection = flexDirectionDropdown.value;
interactiveDiv.style.flexWrap = flexWrapDropdown.value;
interactiveDiv.style.justifyContent = justifyVerticaldropdown.value;
interactiveDiv.style.writingMode = dropdownWritingMode.value;


//find -type f -exec dos2unix {} +