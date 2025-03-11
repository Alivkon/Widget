export function generateButtons(
  buttonData: string[],
  buttonsContainerId: string,
  itemListId: string
): void {
  // Получаем контейнеры для кнопок и списка чекбоксов
  const buttonsContainer = document.getElementById(buttonsContainerId);

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