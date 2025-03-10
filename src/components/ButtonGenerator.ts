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
    
}