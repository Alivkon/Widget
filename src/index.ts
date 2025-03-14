import { generateButtons } from "./components/ButtonGenerator";
import { addDisplayDropdown } from "./components/DisplayDropdown";
import { addFlexDirectionDropdown } from "./components/FlexDirectionDropdown";
import { hideFlexDirectionDropdown } from "./components/hideFlexDirectionDropdown";
import { showFlexDirectionDropdown } from "./components/showFlexDirectionDropdown";
import { addWritingModeDropdown } from "./components/WritingModeDropdown";
import { addJustifyContentDropdown } from "./components/JustifyContentDropdown";
import { hideJustifyContentDropdown } from "./components/hideJustifyContentDropdown";
import { showJustifyContentDropdown } from "./components/showJustifyContentDropdown";
import { addFlexWrapDropdown } from "./components/FlexWrapDropdown";
import { hideFlexWrapDropdown } from "./components/hideFlexWrapDropdown";
import { showFlexWrapDropdown } from "./components/showFlexWrapDropdown";
import { addJustifyVerticalDropdown } from "./components/JustifyVerticalDropdown";
import { hideJustifyVerticalDropdown } from "./components/hideJustifyVerticalDropdown";
import { showJustifyVerticalDropdown } from "./components/showJustifyVerticalDropdown";

const interactiveDiv = document.getElementById('buttons-container')! as HTMLElement;
const generateHtmlButton = document.getElementById('generate-html-button')! as HTMLButtonElement;
const generatedHtmlTextarea = document.getElementById('generated-html')! as HTMLTextAreaElement;
const hiInput = document.getElementById('hi-Input')! as HTMLInputElement;
const houtputDiv = document.getElementById('hi-output')! as HTMLElement;
const wInput = document.getElementById('w-Input')! as HTMLInputElement;
const woutputDiv = document.getElementById('w-output')! as HTMLElement;
const hButnInput = document.getElementById('h-butn-Input')! as HTMLInputElement;
const hButtonOutput = document.getElementById('h-butn-output')! as HTMLElement;
const wButnInput = document.getElementById('w-butn-Input')! as HTMLInputElement;
const wButtonOutput = document.getElementById('w-butn-output')! as HTMLElement;
const colorPickerBody = document.getElementById('color-picker-body')! as HTMLInputElement;

const buttonData = [
  'Connect', 'Disconnect', 'Reset', 'Available', 'Preparing', 'Charging',
  'Finishing', 'Reserved', 'Unavailable', 'Faulted', 'Stop Transaction',
  'Plug`n`Charge', 'EmergencyButton'
];

// Инициализация размеров виджета
hiInput.style.width = "100px";
hiInput.value = "100";
interactiveDiv.style.height = hiInput.value + 'px';

wInput.style.width = "100px";
wInput.value = "600";
interactiveDiv.style.width = wInput.value + 'px';

// Генерация кнопок
generateButtons(buttonData, 'buttons-container', 'item-list');


// Генерация чекбоксов без кнопок
buttonData.forEach((text, index) => {
  const listItem = document.createElement('li');
  listItem.style.display = 'flex';
  listItem.style.alignItems = 'center';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `item-checkbox-${index}`;

  const label = document.createElement('label');
  label.htmlFor = `item-checkbox-${index}`;
  label.textContent = text;
  const itemList = document.getElementById('item-list')!;
  // Обработчик события для чекбокса
  checkbox.addEventListener('change', (event) => {
    if ((event.target as HTMLInputElement).checked) {
      // Если чекбокс отмечен, создаем кнопку
      createButton(text);
    } else {
      // Если чекбокс снят, удаляем кнопку
      removeButton(text);
    }
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  itemList.appendChild(listItem);
});
// Функция для создания кнопки
function createButton(text: string): void {
  const existingButton = Array.from(interactiveDiv.children).find(
    (child) => (child as HTMLElement).textContent === text
  );

  if (!existingButton) {
    const button = document.createElement('button');
    button.id = `interactiveButton${buttonData.indexOf(text)}`;
    button.textContent = text;
    button.style.width = '100px';
    button.style.height = '50px';
    button.style.position = 'absolute'; // Для перемещения
    interactiveDiv.appendChild(button);

    // Добавляем обработчики для перетаскивания
    button.addEventListener('mousedown', (event) =>
      handleMouseDown(event, button)
    );
  }
}

// Функция для удаления кнопки
function removeButton(text: string): void {
  const buttonToRemove = Array.from(interactiveDiv.children).find(
    (child) => (child as HTMLElement).textContent === text
  );

  if (buttonToRemove) {
    interactiveDiv.removeChild(buttonToRemove as Node);
  }
}


// Инициализация выпадающих списков
addDisplayDropdown("left-pane");
addFlexWrapDropdown("left-pane");
addJustifyVerticalDropdown("left-pane");
addFlexDirectionDropdown("left-pane");
addJustifyContentDropdown("left-pane");
addWritingModeDropdown("left-pane");

// Обработчики для экспорта HTML
generateHtmlButton.addEventListener('click', () => {
  if (interactiveDiv) {
    const htmlContent = interactiveDiv.outerHTML;
    generatedHtmlTextarea.value = htmlContent;
  } else {
    console.error('Interactive div not found');
  }
});


// Обработчик изменения высоты кнопки
hButnInput.addEventListener('input', () => {
  const hi_inputButnValue = hButnInput.value;
  if (hi_inputButnValue === "") {
    hButtonOutput.textContent = "";
    return;
  }

  const numberButtonValue = parseInt(hi_inputButnValue, 10);
  if (isNaN(numberButtonValue)) {
    hButtonOutput.textContent = "Введено некорректное число";
    hButnInput.value = "";
    return;
  }

  hButtonOutput.textContent = `Высота кнопки: ${numberButtonValue}`;
  const buttons = document.querySelectorAll<HTMLButtonElement>('#buttons-container button');
  buttons.forEach(btn => btn.style.height = `${numberButtonValue}px`);
});

// Обработчик изменения ширины кнопки
wButnInput.addEventListener('input', () => {
  const widht_inputButnValue = wButnInput.value;
  if (widht_inputButnValue === "") {
    wButtonOutput.textContent = "";
    return;
  }

  const w_numberButtonValue = parseInt(widht_inputButnValue, 10);
  if (isNaN(w_numberButtonValue)) {
    wButtonOutput.textContent = "Введено некорректное число";
    wButnInput.value = "";
    return;
  }

  wButtonOutput.textContent = `Ширина кнопки: ${w_numberButtonValue}`;
  const buttons = document.querySelectorAll<HTMLButtonElement>('#buttons-container button');
  buttons.forEach(btn => btn.style.width = `${w_numberButtonValue}px`);
});

// Обработчик изменения высоты виджета
hiInput.addEventListener('input', () => {
  const hi_inputValue = hiInput.value;
  if (hi_inputValue === "") {
    houtputDiv.textContent = "";
    interactiveDiv.style.height = 'auto';
    return;
  }

  const numberValue = parseInt(hi_inputValue, 10);
  if (isNaN(numberValue)) {
    houtputDiv.textContent = "Введено некорректное число";
    hiInput.value = "";
    return;
  }

  houtputDiv.textContent = `Высота виджета: ${numberValue}`;
  interactiveDiv.style.height = `${numberValue}px`;
});

// Обработчик изменения ширины виджета
wInput.addEventListener('input', () => {
  const winputValue = wInput.value;
  if (winputValue === "") {
    woutputDiv.textContent = "";
    interactiveDiv.style.width = 'auto';
    return;
  }

  const wnumberValue = parseInt(winputValue, 10);
  if (isNaN(wnumberValue)) {
    woutputDiv.textContent = "Введено некорректное число";
    wInput.value = "";
    return;
  }

  woutputDiv.textContent = `Ширина виджета: ${wnumberValue}`;
  interactiveDiv.style.width = `${wnumberValue}px`;
});

// Обработка цвета фона виджета
if (colorPickerBody) {
  colorPickerBody.addEventListener('input', () => {
    interactiveDiv.style.backgroundColor = colorPickerBody.value;
    console.log("colorPickerBody.value = %s", colorPickerBody.value);
  });
} else {
  console.error('Element with ID "color-picker-body" not found.');
}

// Настройка выпадающих списков
const displayDropdown = document.getElementById('display-dropdown')! as HTMLSelectElement;
interactiveDiv.style.display = displayDropdown.value;

const flexDirectionDropdown = document.getElementById('flex-direction-dropdown')! as HTMLSelectElement;
interactiveDiv.style.flexDirection = flexDirectionDropdown.value;

const flexWrapDropdown = document.getElementById('flex-wrap-dropdown')! as HTMLSelectElement;
interactiveDiv.style.flexWrap = flexWrapDropdown.value;

const justifyVerticalDropdown = document.getElementById('justify-vertical-dropdown')! as HTMLSelectElement;
interactiveDiv.style.justifyContent = justifyVerticalDropdown.value;

const writingModeDropdown = document.getElementById('writing-mode-dropdown')! as HTMLSelectElement;
interactiveDiv.style.writingMode = writingModeDropdown.value;

// Настройка перемещения кнопок в buttons-container

const buttons = Array.from(document.querySelectorAll('#buttons-container button')) as HTMLButtonElement[];

let isDragging = false;
let currentButton: HTMLButtonElement | null = null;
let offsetX = 0;
let offsetY = 0;

function handleMouseDown(event: MouseEvent, button: HTMLButtonElement) {
  isDragging = true;
  currentButton = button;
  const rect = button.getBoundingClientRect();
  offsetX = event.clientX - rect.left;
  offsetY = event.clientY - rect.top;
}

function handleMouseMove(event: MouseEvent) {
  if (!isDragging || !currentButton) return;
  const frameRect = interactiveDiv.getBoundingClientRect();
  const newLeft = event.clientX - frameRect.left - offsetX;
  const newTop = event.clientY - frameRect.top - offsetY;

  const maxLeft = interactiveDiv.offsetWidth - currentButton.offsetWidth;
  const maxTop = interactiveDiv.offsetHeight - currentButton.offsetHeight;

  const boundedLeft = Math.max(0, Math.min(newLeft, maxLeft));
  const boundedTop = Math.max(0, Math.min(newTop, maxTop));

  currentButton.style.left = `${boundedLeft}px`;
  currentButton.style.top = `${boundedTop}px`;
}

function handleMouseUp() {
  isDragging = false;
  currentButton = null;
}

// обработчики для кнопок:
buttons.forEach(button => {
  button.style.position = 'absolute'; 
  button.addEventListener('mousedown', (event) => handleMouseDown(event, button));
});

document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);