"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateButtons = generateButtons;
function generateButtons(buttonData, buttonsContainerId, itemListId) {
  var buttonsContainer = document.getElementById("buttons-container");
  var itemList = document.getElementById("item-list");
  if (!buttonsContainer || !itemList) {
    console.error("Buttons container or item list not found");
    return;
  }
  buttonData.forEach(function (text, index) {
    var button = document.createElement('button');
    button.textContent = text;
    button.className = 'interactive-button';
    button.style.width = '100px';
    button.style.height = '50px';
    button.style.display = 'none';
    buttonsContainer.appendChild(button);
    var listItem = document.createElement('li');
    listItem.style.display = 'flex';
    listItem.style.alignItems = 'center';
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = "item-checkbox-".concat(index);
    checkbox.addEventListener('change', function (event) {
      button.style.display = event.target.checked ? 'inline-block' : 'none';
    });
    var label = document.createElement('label');
    label.htmlFor = "item-checkbox-".concat(index);
    label.textContent = text;
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    itemList.appendChild(listItem);

    //  button.style.display = 'none';
  });
}