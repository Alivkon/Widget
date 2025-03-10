import { generateButtons } from "./components/ButtonGenerator";
import { addDisplayDropdown } from "./components/DisplayDropdown";
import { addFlexDirectionDropdown } from "./components/FlexDirectionDropdown";
import { hideFlexDirectionDropdown } from "./components/hideFlexDirectionDropdown";
import { showFlexDirectionDropdown } from "./components/showFlexDirectionDropdown";

import { addWritingModeDropdown } from "./components/WritingModeDropdown";

import {addJustifyContentDropdown} from "./components/JustifyContentDropdown";
import { showJustifyContentDropdown } from "./components/showJustifyContentDropdown";
import { hideJustifyContentDropdown } from "./components/hideJustifyContentDropdown";

import {addFlexWrapDropdown} from "./components/FlexWrapDropdown";
import { hideFlexWrapDropdown } from "./components/hideFlexWrapDropdown";
import { showFlexWrapDropdown } from "./components/showFlexWrapDropdown";

import {addJustifyVerticalDropdown} from "./components/JustifyVerticalDropdown";
import { hideJustifyVerticalDropdown } from "./components/hideJustifyVerticalDropdown";
import { showJustifyVerticalDropdown } from "./components/showJustifyVerticalDropdown";

const interactiveDiv = document.getElementById('buttons-container')!;
const interactiveDiv2 = document.getElementById('buttons-container2')!;

const generateHtmlButton = document.getElementById('generate-html-button')!;
const generateHtmlButton2 = document.getElementById('generate-html-button2')!;

const generatedHtmlTextarea = document.getElementById('generated-html')! as HTMLTextAreaElement;
const generatedHtmlTextarea2 = document.getElementById('generated-html2')! as HTMLTextAreaElement;

const hiInput = document.getElementById('hi-Input') as HTMLInputElement;
const houtputDiv = document.getElementById('hi-output') as HTMLElement;
const wInput = document.getElementById('w-Input') as HTMLInputElement;
const woutputDiv = document.getElementById('w-output') as HTMLElement;
//const displayDropdown = document.getElementById('display-dropdown') as HTMLSelectElement;
const colorPickerBody = document.getElementById('color-picker-body') as HTMLInputElement;
const hButnInput= document.getElementById('h-butn-Input') as HTMLInputElement;
const hButtonOutput = document.getElementById('h-butn-output') as HTMLElement;
const wButnInput= document.getElementById('w-butn-Input') as HTMLInputElement;
const wButtonOutput = document.getElementById('w-butn-output') as HTMLElement;


var buttonData = [
  'Connect', 'Disconnect', 'Reset','Available', 'Preparing',  'Charging', 
  'Finishing', 'Reserved', 'Unavailable', 'Faulted', 'Stop Transaction', 
  'Plug`n`Charge', 'EmergencyButton'
];

hiInput.style.width = "100px";
hiInput.value = "100";
interactiveDiv.style.height = hiInput.value+'px';
interactiveDiv2.style.height = hiInput.value+'px';
wInput.style.width = "100px";
wInput.value = "600";
interactiveDiv.style.width = wInput.value+'px';
interactiveDiv2.style.width = wInput.value+'px';

// Генерация кнопок
generateButtons(buttonData, 'buttons-container', 'item-list');

// Инициализация выпадающих списков
addDisplayDropdown("left-pane");
addFlexWrapDropdown("left-pane");
addJustifyVerticalDropdown("left-pane");
addFlexDirectionDropdown("left-pane");
addJustifyContentDropdown("left-pane");
addWritingModeDropdown("left-pane");

// События
generateHtmlButton.addEventListener('click', () => {
    if (interactiveDiv) {
      const htmlContent = interactiveDiv.outerHTML;
      generatedHtmlTextarea.value = htmlContent;
    } else {
      console.error('Interactive div not found');
    }
});
generateHtmlButton2.addEventListener('click', () => {
    if (interactiveDiv2) {
      const htmlContent2 = interactiveDiv2.outerHTML;
      generatedHtmlTextarea2.value = htmlContent2;
    } else {
      console.error('Interactive div2 not found');
    }
});
hButnInput.addEventListener('input', () => {
  // Получаем текущее значение из поля ввода. 
  let hi_inputButnValue = hButnInput.value;
//  Проверяем, не пустое ли поле ввода. Если пустое, ничего не делаем.
  if (hi_inputButnValue === "") {
    hButtonOutput.textContent = ""; // Очищаем вывод
      return;
  }
  // Преобразуем введенное значение в число с помощью parseInt. 
  // Основание 10 указывает на десятичную систему счисления.
  var numberButtonValue: number = parseInt(hi_inputButnValue, 10);
  // Проверяем, удалось ли преобразование в число. isNaN (is Not a Number) возвращает true, 
  // если значение не является числом.
  if (isNaN(numberButtonValue)) {
    hButtonOutput.textContent = "Введено некорректное число"; // Выводим сообщение об ошибке
      hButnInput.value = ""; // Очищаем поле ввода
      return; // Прерываем выполнение функции
  }
  // Если все проверки пройдены успешно, выводим число под полем ввода.
  console.log("numberButtonValue = %d", numberButtonValue);
  hButtonOutput.textContent = "Высота кнопки: " + numberButtonValue;
  const interactiveButton = document.getElementById('interactiveButton') as HTMLButtonElement;

  if (interactiveButton) {
    interactiveButton.style.height = numberButtonValue + 'px';
    document.querySelectorAll('.movable').forEach(button => (button as HTMLElement).style.height = numberButtonValue + 'px');
  } else {
    console.error('Interactive button not found');
  }
  console.log("interactiveButton.style.height = %s", interactiveButton.style.height);
  console.log("hi_inputButnValue = %s", hi_inputButnValue);
  console.log("hButnInput.value = %s", hButnInput.value);
});

wButnInput.addEventListener('input', () => {
  // Получаем текущее значение из поля ввода. 
  let widht_inputButnValue = wButnInput.value;
//  Проверяем, не пустое ли поле ввода. Если пустое, ничего не делаем.
  if (widht_inputButnValue === "") {
    wButtonOutput.textContent = ""; // Очищаем вывод
      return;
  }
  // Преобразуем введенное значение в число с помощью parseInt. 
  // Основание 10 указывает на десятичную систему счисления.
  var w_numberButtonValue: number = parseInt(widht_inputButnValue, 10);
  // Проверяем, удалось ли преобразование в число. isNaN (is Not a Number) возвращает true, 
  // если значение не является числом.
  if (isNaN(w_numberButtonValue)) {
    wButtonOutput.textContent = "Введено некорректное число"; // Выводим сообщение об ошибке
      wButnInput.value = ""; // Очищаем поле ввода
      return; // Прерываем выполнение функции
  }
  // Если все проверки пройдены успешно, выводим число под полем ввода.
  console.log("w_numberButtonValue = %d", w_numberButtonValue);
  wButtonOutput.textContent = "Ширина кнопки: " + w_numberButtonValue;
  const interactiveButton = document.getElementById('interactiveButton') as HTMLButtonElement;

  if (interactiveButton) {
    interactiveButton.style.width = w_numberButtonValue + 'px';
    document.querySelectorAll('.movable').forEach(button => (button as HTMLElement).style.width = w_numberButtonValue + 'px');
  } else {
    console.error('Interactive button not found');
  }
  console.log("interactiveButton.style.height = %s", interactiveButton.style.width);
  console.log("hi_inputButnValue = %s", widht_inputButnValue);
  console.log("hButnInput.value = %s", wButnInput.value);
});

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
    interactiveDiv2.style.height=numberValue+'px'
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
  interactiveDiv2.style.width=wnumberValue+'px'
});


if (colorPickerBody) {
  colorPickerBody.addEventListener('input', () => {
    interactiveDiv.style.backgroundColor = colorPickerBody.value;
    interactiveDiv2.style.backgroundColor = colorPickerBody.value;    
    console.log("colorPickerBody.value = %s", colorPickerBody.value);
  });
} else {
  console.error('Element with ID "color-picker-body" not found.');
}




const displayDropdown = document.getElementById('display-dropdown') as HTMLSelectElement;
interactiveDiv.style.display = displayDropdown.value;
const flexDirectionDropdown= document.getElementById('flex-direction-dropdown') as HTMLSelectElement;
interactiveDiv.style.flexDirection = flexDirectionDropdown.value;
// const alignItemsDropdown = document.getElementById('align-items-dropdown') as HTMLSelectElement;
// interactiveDiv.style.alignItems = alignItemsDropdown.value;
const flexWrapDropdown = document.getElementById('flex-wrap-dropdown') as HTMLSelectElement;
interactiveDiv.style.flexWrap = flexWrapDropdown.value;
const justifyVerticaldropdown= document.getElementById('justify-vertical-dropdown') as HTMLSelectElement;
interactiveDiv.style.justifyContent = justifyVerticaldropdown.value;
const WritingModedropdown = document.getElementById('writing-mode-dropdown') as HTMLSelectElement;
interactiveDiv.style.writingMode = WritingModedropdown.value;


// Получаем все кнопки
const frame = document.getElementById('buttons-container2') as HTMLElement;
const buttons = Array.from(document.querySelectorAll('.movable')) as HTMLButtonElement[];

// Переменные для хранения состояния
let isDragging = false; // Флаг для отслеживания перетаскивания
let currentButton: HTMLButtonElement | null = null; // Текущая перемещаемая кнопка
let offsetX = 0; // Относительная позиция по X
let offsetY = 0; // Относительная позиция по Y

// Обработчик начала перетаскивания
function handleMouseDown(event: MouseEvent, button: HTMLButtonElement) {
  isDragging = true;
  currentButton = button;

  // Рассчитываем относительные координаты внутри элемента
  const rect = button.getBoundingClientRect();
  offsetX = event.clientX - rect.left;
  offsetY = event.clientY - rect.top;
}

// Обработчик движения мыши
function handleMouseMove(event: MouseEvent) {
  if (!isDragging || !currentButton) return;

  // Рассчитываем новую позицию
  const frameRect = frame.getBoundingClientRect();
  const newLeft = event.clientX - frameRect.left - offsetX;
  const newTop = event.clientY - frameRect.top - offsetY;

  // Ограничиваем движение внутри фрейма
  const maxLeft = frame.offsetWidth - currentButton.offsetWidth;
  const maxTop = frame.offsetHeight - currentButton.offsetHeight;

  const boundedLeft = Math.max(0, Math.min(newLeft, maxLeft));
  const boundedTop = Math.max(0, Math.min(newTop, maxTop));

  // Устанавливаем новую позицию
  currentButton.style.left = `${boundedLeft}px`;
  currentButton.style.top = `${boundedTop}px`;
}

// Обработчик окончания перетаскивания
function handleMouseUp() {
  isDragging = false;
  currentButton = null;
}

// Добавляем обработчики событий для каждой кнопки
buttons.forEach((button) => {
  button.addEventListener('mousedown', (event) => handleMouseDown(event, button));
});

// Обработчики для всего документа
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);

//find -type f -exec dos2unix {} +