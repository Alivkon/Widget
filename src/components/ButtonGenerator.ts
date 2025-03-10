export function generateButtons(
  buttonData: string[],
  buttonsContainerId: string,
  itemListId: string
): void {
  // Получаем контейнеры для кнопок и списка чекбоксов
  const buttonsContainer = document.getElementById(buttonsContainerId);
  const itemList = document.getElementById(itemListId);

  if (!buttonsContainer || !itemList) {
    console.error("Контейнеры для кнопок или списка не найдены");
    return;
  }

  // Проходим по каждому элементу данных для кнопок
  buttonData.forEach((text, index) => {
    // Создаем кнопку
    const button = document.createElement("button");
    button.id = `interactiveButton_${index}`;
    button.textContent = text;
    button.style.width = "100px";
    button.style.height = "50px";
    button.style.position = "absolute"; // Для перемещения
    button.style.display = "none"; // Изначально скрыта
    button.style.left = '0px'; // Начальная позиция
    button.style.top = '0px'; // Начальная позиция

    // Добавляем кнопку в контейнер
    buttonsContainer.appendChild(button);

    // Создаем элемент списка с чекбоксом
    const listItem = document.createElement("li");
    listItem.style.display = "flex";
    listItem.style.alignItems = "center";

    // Создаем чекбокс и метку
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `item-checkbox-${index}`;

    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.textContent = text;

    // Добавляем обработчик для чекбокса
    checkbox.addEventListener("change", (event) => {
      const isChecked = (event.target as HTMLInputElement).checked;
      button.style.display = isChecked ? "block" : "none";
    });

    // Собираем элемент списка
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    itemList.appendChild(listItem);
  });

  // Обработчик изменения цвета кнопок
  const colorPicker = document.getElementById(
    "color-picker-buttons"
  ) as HTMLInputElement;

  if (colorPicker) {
    colorPicker.addEventListener("input", () => {
      const buttons = Array.from(
        buttonsContainer!.children
      ) as HTMLButtonElement[];
      buttons.forEach((btn) => {
        btn.style.backgroundColor = colorPicker.value;
      });
    });
  } else {
    console.error("Цветовой пикер для кнопок не найден");
  }
}