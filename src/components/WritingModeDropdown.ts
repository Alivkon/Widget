//writingMode ["horizontal-tb","vertical-rl","vertical-lr","sideways-rl","sideways-lr"];
export function addWritingModeDropdown(leftPaneId: string): void {
    // Ищем левую панель
    const leftPane = document.getElementById(leftPaneId);
    if (!leftPane) {
        console.error(`Element with ID '${leftPaneId}' not found.`);
        return;
    }
  
    // Создаём контейнер для выпадающего списка и текстового поля
    const containerWritingMode = document.createElement("div");
    containerWritingMode.style.marginBottom = "20px";  
    containerWritingMode.style.display = "flex";
    containerWritingMode.id = "container-writing-mode";
    // Создаём выпадающий список
    const WritingModedropdown = document.createElement("select");
    WritingModedropdown.id = "writing-mode-dropdown";
    WritingModedropdown.style.width = "200px";  
    WritingModedropdown.style.marginBottom = "10px";
    WritingModedropdown.style.padding = "10px";
    WritingModedropdown.style.display = "flex";
    // Слова для выпадающего списка
    const options = ["horizontal-tb","vertical-rl","vertical-lr","sideways-rl","sideways-lr"];
    options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        WritingModedropdown.appendChild(opt);
    });
  
    // Создаём текстовое поле
    const textWritingMode = document.createElement("p");
  
    textWritingMode.id = "text-writing-mode-output";
    textWritingMode.textContent = options[0];
    
    // Обработчик изменений для выпадающего списка
    WritingModedropdown.addEventListener("change", () => {
            const buttonsContainer = document.getElementById('buttons-container');
            console.log('Change WritingModedropdown');
        if (buttonsContainer) {
            buttonsContainer.style.writingMode = WritingModedropdown.value;
            textWritingMode.textContent = WritingModedropdown.value;
            console.log('Change WritingModeDropdown');
        } else {
            console.error('Buttons container not found');
        }
    });

    // Создаём заголовок
    const textHeadwritingMode = document.createTextNode("writingMode");
  
    // Создаём элемент <br> для перевода строки
    const lineBreak = document.createElement("br");
    
    // Добавляем элементы в контейнер, а затем в левую панель
    containerWritingMode.appendChild(textHeadwritingMode);
    containerWritingMode.appendChild(lineBreak); // Добавляем перевод строки
    containerWritingMode.appendChild(WritingModedropdown);
    containerWritingMode.appendChild(textWritingMode);
    leftPane.appendChild(containerWritingMode);
  }