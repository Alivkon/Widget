//justifyContent ["flex-start", "center", "flex-end", "space-between"];
export function addJustifyVerticalDropdown(leftPaneId: string): void {
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
    console.log('Change justifyVerticaldropdown');
    if (buttonsContainer) {
        // Устанавливаем стиль align-items для buttons-container
        textVerticalAlign.textContent = justifyVerticaldropdown.value;            
        buttonsContainer.style.alignItems = justifyVerticaldropdown.value;
        console.info('buttonsContainer.style.alignItems = ' + justifyVerticaldropdown.value);
    } else {
        console.error('Buttons container not found');
    }
    });

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