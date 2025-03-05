export function generateButtons(buttonData: string[], buttonsContainerId: string, itemListId: string): void {
    const buttonsContainer = document.getElementById("buttons-container");
    const itemList = document.getElementById("item-list");

    if (!buttonsContainer || !itemList) {
        console.error("Buttons container or item list not found");
        return;
    }

    buttonData.forEach((text, index) => {
        const button = document.createElement('button');
        button.id = `interactiveButton`;
        button.textContent = text;
       // button.className = 'interactiveBtn';
        button.style.width = '100px';
        button.style.height = '50px';
        button.style.display = 'none';

        buttonsContainer.appendChild(button);

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

      //  button.style.display = 'none';
      const colorPickerButtons = document.getElementById('color-picker-buttons') as HTMLInputElement;

      if (colorPickerButtons) {
        colorPickerButtons.addEventListener('input', () => {
          button.style.backgroundColor= colorPickerButtons.value;
          console.log("buttonColor = %s", colorPickerButtons.value);
          console.log("colorPickerButtons.value = %s", colorPickerButtons.value);
        });
      } else {
        console.error('Element with ID "color-picker-body" not found.');
      }
});
    // const hButnInput= document.getElementById('h-butn-Input') as HTMLInputElement;
    // const hButtonOutput = document.getElementById('h-butn-output') as HTMLElement;
    //   hButnInput.addEventListener('input', () => {
    //     // Получаем текущее значение из поля ввода. 
    //     let hi_inputButnValue = hButnInput.value;
    //   //  Проверяем, не пустое ли поле ввода. Если пустое, ничего не делаем.
    //     if (hi_inputButnValue === "") {
    //       hButtonOutput.textContent = ""; // Очищаем вывод
    //         return;
    //     }
    //       //numberValue= 100;
    //     // Преобразуем введенное значение в число с помощью parseInt. 
    //     // Основание 10 указывает на десятичную систему счисления.
    //     var numberButtonValue: number = parseInt(hi_inputButnValue, 10);
    //     // Проверяем, удалось ли преобразование в число. isNaN (is Not a Number) возвращает true, 
    //     // если значение не является числом.
    //     if (isNaN(numberButtonValue)) {
    //       hButtonOutput.textContent = "Введено некорректное число"; // Выводим сообщение об ошибке
    //       hButnInput.value = ""; // Очищаем поле ввода
    //         return; // Прерываем выполнение функции
    //     }
    //     // Если все проверки пройдены успешно, выводим число под полем ввода.
    //     console.log("numberButtonValue = %d", numberButtonValue);
    //     hButtonOutput.textContent = "Высота кнопки: " + numberButtonValue;
    //     const interactiveButton = document.getElementById('interactiveButton'); 
    //     if (interactiveButton) {
    //       interactiveButton.style.height = numberButtonValue + 'px';
    //       console.log("interactiveButton.style.height = %s", numberButtonValue + 'px');
    //     } else {
    //       console.error('Interactive button not found');
    //     }

    //     //  interactiveButton.style.height = numberButtonValue + 'px';
    //     if (interactiveButton) {
    //         console.log("interactiveButton.style.height = %s", numberButtonValue + 'px');
    //     }
    //    else {
    //         console.error('Interactive button not found');
    //     }
    //     console.log("hi_inputButnValue = %s", hi_inputButnValue);
    //     console.log("hButnInput.value = %s", hButnInput.value);
      

    // }
    //);
}